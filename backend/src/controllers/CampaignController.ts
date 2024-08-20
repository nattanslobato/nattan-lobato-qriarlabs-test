import { Request, Response } from "express";
import CampaignRepository from "../repositories/CampaignRepository";

const getCampaigns = async (req: Request, res: Response) => {
    try{
        const campaign = await CampaignRepository.getCampaigns()
        return res.status(200).send({message: "Successful search.", campaign})

    }catch(error){
        return res.status(400).send({message: "Error when searching for campaigns.", error})
    }
}

const getCampaignById = async (req: Request, res: Response) => {
    try{
        const { id } = req.params
        
        const campaign = await CampaignRepository.getCampaignById(Number(id))

        if(!campaign){
            return res.status(404).send({message: "Campaign not found."})
        }

        return res.status(200).send({message: "Campaign found.", campaign})

    }catch(error){
        return res.status(400).send({message: "Error when searching for campaign.", error})
    }
}

const createCampaign = async (req: Request, res: Response) => {
    try{
        const {name, description, target_value, image } = req.body

        const newCampaign = await CampaignRepository.createCampaign({name, description, target_value, image})
        
        return res.status(201).send({message: "Campaign created successfully.", newCampaign})

    }catch(error){
        return res.status(400).send({message: "Error when creating campaign.", error})
    }
}

const updateCampaign = async (req: Request, res: Response) => { 
    try{
        const {id, name, description, target_value, image } = req.body

        const campaignExist = await CampaignRepository.getCampaignById(Number(id))

        if(!campaignExist){
            return res.status(404).send({message: "Campaign not found."})
        }

        const campaign = await CampaignRepository.updateCampaign(Number(id), {name, description, target_value, image})

        return res.status(200).send({message: "Campaign updated successfully.", campaign})

    }catch(error){
        return res.status(400).send({message: "Error when updating campaign.", error})
    }
}

const deleteCampaign = async (req: Request, res: Response) => {
    try{
        const { id } = req.params

        const campaignExist = await CampaignRepository.getCampaignById(Number(id))

        if(!campaignExist){
            return res.status(404).send({message: "Campaign not found."})
        }

        const campaign = await CampaignRepository.deleteCampaign(Number(id))
        return res.status(200).send({message: "Campaign successfully deleted.", campaign})

    }catch(error){
        return res.status(400).send({message: "Error when deleting campaign.", error})
    }
}

export default { getCampaigns, getCampaignById, createCampaign, updateCampaign, deleteCampaign }