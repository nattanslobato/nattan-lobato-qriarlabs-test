import { prisma } from "../database";

const getCampaigns = async ()  => {
    return prisma.campaign.findMany({
        include: {
            Donation: true
        }
    })
}

const getCampaignById = async (id: number) => {
    return prisma.campaign.findUnique({
        where: {
            campaign_id: id
        },
        include: {
            Donation: true
        }
    })
}

const createCampaign = async (data: { name: string, description: string, target_value: number, image: string }) => {
    return prisma.campaign.create({
        data
    })
}

const updateCampaign = async (id: number, data: { name?: string, description?: string, target_value?: number, image?: string}) => {
    return prisma.campaign.update({
        where: {campaign_id: id},
        data
    })
}

const deleteCampaign = async (id: number) => {
    return prisma.campaign.delete({
        where: {
            campaign_id: id
        }
    })
}

export default { getCampaigns, getCampaignById, createCampaign, updateCampaign, deleteCampaign }