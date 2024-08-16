
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
    ValueDiv
} 
from "./CampaignListCard.style";


type CampaignCardProps = {
    campaign: {
        name: string
        value: number
        target_value: number
        image: string
    }
}

const CampaignListCard: React.FC<CampaignCardProps> = ({campaign}) => {
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
                        <h3><strong>R$ {campaign.value}</strong></h3>
                    </ValueDiv>
                    <h1><strong> de </strong></h1>
                    <ValueDiv>
                        <h3><strong>R$ {campaign.target_value}</strong></h3>
                    </ValueDiv>
                </CounterDiv>
        </Container>
    )
}

export default CampaignListCard