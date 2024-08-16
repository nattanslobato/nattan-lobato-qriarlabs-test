import { Container } from "./CampaignList.styles";
import CampaignListCard from "../CampaignListCard";
import React from "react";

const campaigns = [
    {
        id: 1,
        name: "Auxilio viagem",
        value: 100,
        target_value: 500,
        image: "/image_1"
    },
    {
        id: 2,
        name: "Ajuda animal",
        value: 56,
        target_value: 200,
        image: "/image_2"
    },
    {
        id: 3,
        name: "Construcao casa",
        value: 500,
        target_value: 4000,
        image: "/image_1"
    },
    {
        id: 4,
        name: "Ajuda tratamento doenca",
        value: 500,
        target_value: 1500,
        image: "/image_2"
    }
]

const CampaignList: React.FC = () => {
    return(
        <Container>
            {
                campaigns.map((campaign, index) => (
                    <CampaignListCard key={index} campaign={campaign}/>
                ))
            }
        </Container>
        
    )
};

export default CampaignList;