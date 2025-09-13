"use client"

import Link from "next/link";
import { HeaderDiv, TitleDiv, CreateCampaignButton} from "./CampaignListHeader.styles";

const CampaignListHeader = () => {
    return (
        <HeaderDiv>
            <TitleDiv>
                <h1>Campanhas</h1>
            </TitleDiv>
        
            <Link href={"/CreateCampaign"}>
                <CreateCampaignButton>
                    <span>+ </span>
                    Criar Nova Campanha
                </CreateCampaignButton>
            </Link>
        </HeaderDiv>
    )
}

export default CampaignListHeader;