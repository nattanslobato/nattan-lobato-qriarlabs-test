import { Request, Response } from "express";
import DonationRepository from "../repositories/DonationRepository";
import CampaignRepository from "../repositories/CampaignRepository";

const getDonations = async (req: Request, res: Response) => {
    try{        
        const donation = await DonationRepository.getDonations()
        return res.status(200).send({message: "Successful search.", donation})

    }catch(error){
        return res.status(400).send({message: "Error when searching for donations.", error})
    }
}

const getDonationById = async (req: Request, res: Response) => {
    try{
        const { id } = req.params
        
        const donation = await DonationRepository.getDonationById(Number(id))

        if(!donation){
            return res.status(404).send({message: "Donation not found."})
        }

        return res.status(200).send({message: "Donation found.", donation})

    }catch(error){
        return res.status(400).send({message: "Error when searching for donation.", error})
    }
}

const createDonation = async (req: Request, res: Response) => {
    try{
        const { name, value, campaign_id } = req.body

        const campaignExist = await CampaignRepository.getCampaignById(Number(campaign_id))

        if(!campaignExist){
            return res.status(404).send({message: "Campaign not found."})
        }

        const newDonation = await DonationRepository.createDonation({name, value, campaign_id})

        return res.status(201).send({message: "Donation created successfully.", newDonation})

    }catch(error){
        return res.status(400).send({message: "Error when creating donation.", error})
    }
}

const updateDonation = async (req: Request, res: Response) => {
    try{
        const { id, name, value } = req.body

        const donationExist = await DonationRepository.getDonationById(Number(id))

        if(!donationExist){
            return res.status(404).send({message: "Donation not found."})
        }

        const donation = await DonationRepository.updateDonation(Number(id), {name, value})

        return res.status(200).send({message: "Donation updated successfully.", donation})

    }catch(error){
        return res.status(400).send({message: "Error when updating donation.", error})
    }
}

const deleteDonation = async (req: Request, res: Response) => {
    try{
        const { id } = req.params

        const donationExist = await DonationRepository.getDonationById(Number(id))

        if(!donationExist){
            return res.status(404).send({message: "Donation not found."})
        }

        const donation = await DonationRepository.deleteDonation(Number(id))

        return res.status(200).send({message: "Donation successfully deleted.", donation})

    }catch(error){
        return res.status(400).send({message: "Error when deleting donation.", error})
    }
}

export default { getDonations, getDonationById, createDonation, updateDonation, deleteDonation }