import { Container } from "./CampaignList.styles";
import CampaignListCard from "../CampaignListCard";
import React, { useEffect, useState } from "react";
import api from "@/services/api";

// const campaigns2 = [
//     {
//         id: 1,
//         name: "Auxilio viagem",
//         value: 100,
//         target_value: 500,
//         image: "/image_1"
//     },
//     {
//         id: 2,
//         name: "Ajuda animal",
//         value: 56,
//         target_value: 200,
//         image: "/image_2"
//     },
//     {
//         id: 3,
//         name: "Construcao casa",
//         value: 500,
//         target_value: 4000,
//         image: "/image_1"
//     },
//     {
//         id: 4,
//         name: "Ajuda tratamento doenca",
//         value: 500,
//         target_value: 1500,
//         image: "/image_2"
//     }
// ]

const CampaignList: React.FC = () => {

    const [campaigns, setCampaigns] = useState<any[]>([])

    const listCampaigns = async () => {
        try{
            const response = await api.get("/campaign")

            const data = response.data

            console.log(data)

            setCampaigns(data.campaign)
        }catch(error){
            console.error('Error when searching for campaigns', error)
        }
    }
    
    useEffect(() => {
        listCampaigns()
    }, [])


    return(
        <Container>
            {campaigns.map((campaign, index) => (
                <CampaignListCard key={index} campaign={campaign} />
            ))}
        </Container>
        
    )
};

export default CampaignList;