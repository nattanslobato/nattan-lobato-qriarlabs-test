import { Container } from "./CampaignList.styles";
import CampaignListCard from "../CampaignListCard";
import React, { useEffect, useState } from "react";
import api from "@/services/api";

interface Campaign {
    campaign_id: number;
    name: string;
    target_value: number;
    image: string;
    Donation: { value: number }[];
}

const CampaignList: React.FC = () => {

    const [campaigns, setCampaigns] = useState<Campaign[]>([]);

    const handleListCampaigns = async () => {
        try {
            const response = await api.get("/campaign");
            const data = response.data;
            setCampaigns(data.campaign);
        } catch (error) {
            console.error('Error when searching for campaigns', error);
        }
    };

    useEffect(() => {
        handleListCampaigns()
    }, [])

    const handleDelete = async (campaign_id: number) => {
        try {
            await api.delete(`/campaign/${campaign_id}`);
            setCampaigns(prevCampaigns => prevCampaigns.filter(campaign => campaign.campaign_id !== campaign_id));
        } catch (error) {
            console.error('Error when deleting campaign', error);
        }
    };

    return(
        <Container>
            {campaigns.map((campaign) => (
                <CampaignListCard key={campaign.campaign_id} campaign={campaign} onDelete={handleDelete} />
            ))}
        </Container>
        
    )
};

export default CampaignList;