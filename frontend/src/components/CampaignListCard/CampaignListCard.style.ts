import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    width: 45%;
    background-color: #df0026;
    margin: 1rem;
    border-radius: 1rem;
    color: #fff;

`

export const Image = styled.img.attrs(props => ({src: props.src, alt: "Image Campaign"}))`
    width: 100%;
    border-radius: 1rem;
`

export const HeadCardDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 90%;

` 

export const CampaignName = styled.button`
    width: 100%;
    border-style: none;
    font-weight: bold;
    font-size: 2rem;
    background: none;
    cursor: pointer;

    color: #fff;

`

export const FeatDiv = styled.div`
    display: flex;
    justify-content: space-between;
    width: 30%;
    padding: 0 0.5rem;
    

`

export const CampaignEdit = styled.img.attrs({src: "/assets/edit_icon.png", alt: "Edit Icon"})`
    min-width: 2rem;
    min-height: 2rem;
    max-width: 4rem;
    mix-blend-mode: multiply;

`

export const CampaignDelete = styled.img.attrs({src: "/assets/delete_icon.png", alt: "Delete Icon"})`
    min-width: 2rem;
    min-height: 2rem;
    max-width: 4rem;
    mix-blend-mode: multiply;

`

export const CounterDiv = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 100%;
    min-height: 3rem;
`

export const ValueDiv = styled.div`
    font-size: 1.5rem;
    margin: 0 1rem;

`

export const PercentageDiv = styled.div`
    font-size: 1.5rem;
    margin: 0 1rem;
`