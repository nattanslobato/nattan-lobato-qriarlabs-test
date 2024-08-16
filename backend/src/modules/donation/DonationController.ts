import { Request, Response } from "express";
import { prisma } from "../../database";

const getDonations = async (req: Request, res: Response) => {
    try{        
        const donation = await prisma.donation.findMany()
        return res.status(200).send({message: "Successful search.", donation})

    }catch(error){
        return res.status(400).send({message: "Error when searching for donations.", error})
    }
}

const getDonationById = async (req: Request, res: Response) => {
    try{
        const { id } = req.params
        
        const donation = await prisma.donation.findUnique({
            where: {donation_id: Number(id)}
        })

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

        const campaignExist = await prisma.campaign.findUnique({
            where: {campaign_id: Number(campaign_id)}
        })

        if(!campaignExist){
            return res.status(404).send({message: "Campaign not found."})
        }

        const newDonation = await prisma.donation.create({
            data: {
                name,
                value,
                campaign_id

            }
        })
        return res.status(201).send({message: "Donation created successfully.", newDonation})

    }catch(error){
        return res.status(400).send({message: "Error when creating donation.", error})
    }
}

const updateDonation = async (req: Request, res: Response) => {
    try{
        const { id, name, value } = req.body

        const donationExist = await prisma.donation.findUnique({
            where: {donation_id: Number(id)}
        })

        if(!donationExist){
            return res.status(404).send({message: "Donation not found."})
        }

        const donation = await prisma.donation.update({
            where: {donation_id: Number(id)},
            data: {
                name,
                value
            }
        })

        return res.status(200).send({message: "Donation updated successfully.", donation})

    }catch(error){
        return res.status(400).send({message: "Error when updating donation.", error})
    }
}

const deleteDonation = async (req: Request, res: Response) => {
    try{
        const { id } = req.params

        const donationExist = await prisma.donation.findUnique({
            where: {donation_id: Number(id)}
        })

        if(!donationExist){
            return res.status(404).send({message: "Donation not found."})
        }

        const donation = await prisma.donation.delete({
            where: {donation_id: Number(id)}
        })

        return res.status(200).send({message: "Donation successfully deleted.", donation})

    }catch(error){
        return res.status(400).send({message: "Error when deleting donation.", error})
    }
}

export default { getDonations, getDonationById, createDonation, updateDonation, deleteDonation }