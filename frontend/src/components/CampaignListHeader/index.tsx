"use client"

import Link from "next/link";
import { HeaderDiv, HeaderItemsDiv, TitleDiv, CreateCampaignButton} from "./CampaignListHeader.styles";

const CampaignListHeader = () => {
    return (
        <HeaderDiv>
            <HeaderItemsDiv>    
                <TitleDiv>
                    <h1>Campanhas</h1>
                </TitleDiv>
            
                <Link href={"/CreateCampaign"}>
                    <CreateCampaignButton>
                        <span>+ </span>
                        Criar Nova Campanha
                    </CreateCampaignButton>
                </Link>
            </HeaderItemsDiv>
        </HeaderDiv>
    )
}

export default CampaignListHeader;