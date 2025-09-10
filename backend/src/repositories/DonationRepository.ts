import { prisma } from "../database";


const getDonations = async () => {
    return prisma.donation.findMany()
}

const getDonationById = async (id: number) => {
    return prisma.donation.findUnique({
        where: {donation_id: id}
    })
}

const createDonation = async (data: {name: string, value: number, campaign_id: number}) => {
    return prisma.donation.create({
        data
    })
}

const updateDonation = async (id: number, data: {name?: string, value?: number}) => {
    return prisma.donation.update({
        where: {donation_id: id},
        data
    })
}

const deleteDonation = async (id: number) => {
    return prisma.donation.delete({
        where: {donation_id: id}
    })
}

export default { getDonations, getDonationById, createDonation, updateDonation, deleteDonation }