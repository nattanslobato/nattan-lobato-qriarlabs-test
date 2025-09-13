
import Link from "next/link";
import React from "react";
import {
    Container,
    Image,
    CampaignName,
    TextCardDiv,
    ProgressContainer,
    ProgressBar,
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

const CampaignListCard: React.FC<CampaignCardProps> = ({ campaign, onDelete }) => {
    const totalDonationValue = campaign.Donation.reduce((sum: number, donation) => sum + donation.value, 0);
    const percentage = (totalDonationValue / campaign.target_value) * 100;
    const formattedPercentage = percentage.toFixed(2);

    const handleDeleteClick = () => {
        if (window.confirm('Você realmente deseja deletar a campanha?')) {
            onDelete(campaign.campaign_id);
        }
    };


    return (
        <Container>
            <Link href={"/Campaign"}>
                <Image src={"/image.jpg"} />
                <CampaignName>
                    <p>{campaign.name}</p>
                </CampaignName>
                <TextCardDiv>
                    <p>Arrecadado</p>
                    <p>Meta</p>
                </TextCardDiv>
                <ValueDiv>
                        <p>R$ {totalDonationValue}</p>
                        <strong><p>R$ {campaign.target_value}</p></strong>
                </ValueDiv>
                <ProgressContainer>
                    <ProgressBar percentage={percentage}/>
                </ProgressContainer>
                <PercentageDiv>
                    <p>{formattedPercentage}%</p>
                </PercentageDiv>
            </Link>
        </Container>
    )
}

export default CampaignListCard