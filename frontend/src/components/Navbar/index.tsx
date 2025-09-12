"use client"

import { NavbarDiv, NavbarItems,  Logo, NavbarButton } from "./Navbar.style";
import Link from "next/link"

const Navbar = () => {
    return (
        <NavbarDiv>
            <NavbarItems>
            <Link href={"/"}>
                <Logo />
            </Link>
            <Link href={"/CreateCampaign"}>
                <NavbarButton>
                    Nova Campanha
                </NavbarButton>
            </Link>
            </NavbarItems>
        </NavbarDiv>
    )
}
export default Navbar;