"use client"

import Link from "next/link";
import { HeaderDiv, TitleDiv, CreateCampaignButton} from "./Header.styles";

const Header = () => {
    return (
        <HeaderDiv>
            <TitleDiv>
                    <h1>Campanhas</h1>
            </TitleDiv>
        
            <Link href={"/CreateCampaign"}>
                <CreateCampaignButton>
                    Criar Campanha
                </CreateCampaignButton>
            </Link>
        </HeaderDiv>
    )
}

export default Header;