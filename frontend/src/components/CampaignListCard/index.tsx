
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


type CampaignCardProps = {
    campaign: {
        Donation:{
            value: number
        }
        name: string
        target_value: number
        image: string
    }
}

const CampaignListCard: React.FC<CampaignCardProps> = ({campaign}) => {

    const totalDonationValue = campaign.Donation.reduce((sum: number, donation) => sum + donation.value, 0);

    const percentage = (totalDonationValue / campaign.target_value) * 100;

    const formattedPercentage = percentage.toFixed(2);



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
                    <CampaignDelete/>
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