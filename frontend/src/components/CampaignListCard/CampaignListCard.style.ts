import styled from "styled-components";

interface ProgressProps {
  percentage: number;
}

export const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    max-width: 30%;
    margin: 1rem;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    border-radius: 0.75rem;
    background-color: #fff;
`

export const Image = styled.img.attrs(props => ({src: props.src, alt: "Image Campaign"}))`
    background-color: #e03737ff;
    width: 100%;
    border-top-left-radius: 0.75rem;
    border-top-right-radius: 0.75rem;
`

export const CampaignName = styled.div`
    display: flex;
    flex-direction: row;
    font-weight: bold;
    font-size: 1.25rem;
    margin: 0 1.5rem;
    padding: 0 0.5rem;
    p {
        margin: 0.3rem 0;
    }
`

export const TextCardDiv = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: 0 1.5rem;
    padding: 0 0.5rem;
    font-size: 0.75rem;
    p {
        margin: 0.5rem 0;
    }

`

export const ValueDiv = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;    
    font-size: 0.9rem;
    padding: 0 0.5rem;
    margin: 0 1.5rem;
    p {
        margin: 0.5rem 0;
    }

`

export const ProgressContainer = styled.div`
    margin: 0.5rem 1.5rem;
    background-color: #e3f2fdff;
    border: 1px solid #ccc;
    border-radius: 1rem; 
    height: 0.8rem;
    overflow: hidden;
`

export const ProgressBar = styled.div<ProgressProps>`
    height: 100%;
    width: ${({ percentage }) => `${percentage}%`};
    background: linear-gradient(to right, #22c55e, #16a34a);
    border-radius: inherit;
    transition: width 0.4s ease-in-out;
`

export const PercentageDiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;

    p {
        margin: 0 0 1.5rem 0;
    }
`