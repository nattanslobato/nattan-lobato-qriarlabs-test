
import Link from "next/link";
import React from "react";
import 
{ Container, 
    Image, 
    HeadCardDiv, 
    CampaignName,
    FeatDiv,
    CampaignEdit,
    CampaignDelete,
    CounterDiv,
    ValueDiv,
    PercentageDiv
} 
from "./CampaignListCard.style";


interface CampaignCardProps {
    campaign: {
        campaign_id: number;
        name: string;
        target_value: number;
        image: string;
        Donation: { value: number }[];
    };
    onDelete: (id: number) => void; 
}

const CampaignListCard: React.FC<CampaignCardProps> = ({campaign, onDelete}) => {
    const totalDonationValue = campaign.Donation.reduce((sum: number, donation) => sum + donation.value, 0);
    const percentage = (totalDonationValue / campaign.target_value) * 100;
    const formattedPercentage = percentage.toFixed(2);

    const handleDeleteClick = () => {
        if (window.confirm('Você realmente deseja deletar a campanha?')) {
            onDelete(campaign.campaign_id);
        }
    };


    return(
        <Container>
            <Link href={"/Campaign"}>
            <Image src={"/imagem_teste.png"}/>
            </Link>
            <HeadCardDiv>
                <Link href={"/Campaign"}>
                    <CampaignName>
                        <p>{campaign.name}</p>
                    </CampaignName>
                </Link>
                <FeatDiv>
                    <CampaignEdit/>
                    <CampaignDelete onClick={handleDeleteClick}/>
                </FeatDiv>
            </HeadCardDiv>
                <CounterDiv>
                    <ValueDiv>
                        <h3><strong>R$ {totalDonationValue}</strong></h3>
                    </ValueDiv>
                    <h1><strong> de </strong></h1>
                    <ValueDiv>
                        <h3><strong>R$ {campaign.target_value}</strong></h3>
                    </ValueDiv>
                    <PercentageDiv>
                        <h3><strong>{formattedPercentage}%</strong></h3>
                    </PercentageDiv>
                </CounterDiv>
        </Container>
    )
}

export default CampaignListCard