import styled from "styled-components";

export const HeaderDiv = styled.div`
    display: flex;
    justify-content: center;
    padding: 0 2rem;
    width: 100%;
`

export const HeaderItemsDiv = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 0.5rem 3rem;
    width: 100%;       
    max-width: 80rem;     
`

export const TitleDiv = styled.div`
    font-size: 1.25rem;
    line-height: 1rem; 

`

export const CreateCampaignButton = styled.button`
    display: flex;
    align-items: center;
    gap: 0.5rem;
    border: none;
    border-radius: 0.5rem;
    padding: 0.8rem;
    font-weight: 600;
    font-size: 1rem;
    background-color: #518fcd;
    color: #fff;
    
    cursor: pointer;
`