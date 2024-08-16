"use client"

import { NavbarDiv, Logo } from "./Navbar.style";
import Link from "next/link"

const Navbar = () => {
    return (
        <NavbarDiv>
            <Link href={"/"}>
                <Logo />
            </Link>
            <Link href={"/"}>
                <h1>Campanhas</h1>
            </Link>
        </NavbarDiv>
    )
}
export default Navbar;