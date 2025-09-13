import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    
`

export const CampaignsContainer = styled.div`
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 0 1rem;
    max-width: 80rem;

    @media (max-width: 76rem) { 
        justify-content: center; 
        gap: 1rem;
    }

    @media (max-width: 48rem) { 
        flex-direction: column;
        align-items: center;
    }

`