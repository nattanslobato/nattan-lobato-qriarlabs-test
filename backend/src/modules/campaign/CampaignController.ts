import { Request, Response } from "express";
import { prisma } from "../../database";

export default {
    async getCampaigns(req: Request, res: Response){
        try{
            const campaign = await prisma.campaign.findMany()
            return res.status(200).send({message: "Successful search.", campaign})

        }catch(error){
            return res.status(400).send({message: "Error when searching for campaigns.", error})
        }
    },

    async getCampaign(req: Request, res: Response){
        try{
            const { id } = req.params
            
            const campaign = await prisma.campaign.findUnique({
                where: {campaign_id: Number(id)}
            })

            if(!campaign){
                return res.status(404).send({message: "Campaign not found."})
            }

            return res.status(200).send({message: "Campaign found.", campaign})



        }catch(error){
            return res.status(400).send({message: "Error when searching for campaign.", error})
        }


    },

    async createCampaign(req: Request, res: Response){
        try{
            const {name, description, target_value, image } = req.body

            const newCampaign = await prisma.campaign.create({
                data: {
                    name,
                    description,
                    target_value,
                    image
                }
            })
            return res.status(201).send({message: "Campaign created successfully.", newCampaign})


        }catch(error){
            return res.status(400).send({message: "Error when creating campaign.", error})
        }
    },

    async updateCampaign(req: Request, res: Response){
        try{
            const {id, name, description, target_value, image } = req.body

            const campaignExist = await prisma.campaign.findUnique({
                where: {campaign_id: Number(id)}
            })

            if(!campaignExist){
                return res.status(404).send({message: "Campaign not found."})
            }

            const campaign = await prisma.campaign.update({
                where: {campaign_id: Number(id)},
                data: {
                    name,
                    description,
                    target_value,
                    image
                }
            })

            return res.status(200).send({message: "Campaign updated successfully.", campaign})

        }catch(error){
            return res.status(400).send({message: "Error when updating campaign.", error})
        }
    },
    
    async deleteCampaign(req: Request, res: Response){
        try{
            const { id } = req.params

            const campaignExist = await prisma.campaign.findUnique({
                where: {campaign_id: Number(id)}
            })

            if(!campaignExist){
                return res.status(404).send({message: "Campaign not found."})
            }

            const campaign = await prisma.campaign.delete({
                where: {campaign_id: Number(id)}
            })

            return res.status(200).send({message: "campaign successfully deleted.", campaign})

        }catch(error){
            return res.status(400).send({message: "Error when deleting campaign.", error})
        }
    }
}