import styled from "styled-components";

export const NavbarDiv = styled.div`
    position: sticky; 
    top: 0; 
    z-index: 50; 
    background-color: #ffffff; 
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
    display: flex;
    justify-content: center;
    width: 100%;
    height: 8rem;
`

export const NavbarItems = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 0.5rem 3rem;
    width: 80rem; 

`

export const Logo = styled.img.attrs({src: "/logo1.png", alt: "Solidariza logo"})`
    width: 7rem;
`

export const NavbarButton = styled.button`
    background-color: #FF6961;
    color: white;
    border: none;
    padding: 0.8rem 1.5rem;
    border-radius: 0.5rem;
    font-size: 1.5rem;
    font-weight: bold;
    cursor: pointer;
    transition: background-color 0.3s ease;
    &:hover {
        background-color: #ff4c3b;
    }
    &:active {
        background-color: #e04336;
    }   
`