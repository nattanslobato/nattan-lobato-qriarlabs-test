import styled from "styled-components";

export const HeaderCreateDiv = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 2rem;
    color: #000;
`

export const TitleDiv = styled.div`
    font-size: 1.5rem;
`

export const CampaignForm = styled.form`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    margin: 0 1rem;
    padding: 1rem 4rem;
    background-color: #d7cfd7;
    border-radius: 1rem;
`

export const Input = styled.input`
    width: 45%;
    height: 4rem;
    border-radius: 0.5rem;
    padding: 0rem 3rem;
    margin: 1rem 0;
    background-color: #F5F5F5;
`

export const InputDescription = styled.textarea`
    width: 45%;
    min-height: 15rem;
    border-radius: 0.5rem;
    padding: 1rem 2rem;
    margin: 1rem 0;
    background-color: #F5F5F5;
    resize: none;
`

export const UploadImageDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 45%;
    min-height: 15rem;
    border-radius: 0.5rem;
    padding: 1rem 2rem;
    margin: 1rem 0;
    background-color: #F5F5F5;
`

export const ImageUpload= styled.img.attrs(props => ({src: props.src, alt: "Image upload"}))`
    width: 5rem;
    border-radius: 1rem;
`

// export const InputImage = styled.input`
//     background-color: green;
// `


export const ButtonDiv = styled.div`
    display: flex;
    justify-content: space-around       ;
    width: 100%;
`
export const ButtonBack = styled.button`
    min-width: 10rem;
    background-color: #dc0044;
    border: none;
    border-radius: 1rem;
    padding: 0.8rem;
    text-align: center;
    font-weight: bold;
    font-size: 2rem;
    color: #fff;
    
    cursor: pointer;
`

export const ButtonConfirm = styled.button`
    min-width: 10rem;
    background-color: #518fcd;
    border: none;
    border-radius: 1rem;
    padding: 0.8rem;
    text-align: center;
    font-weight: bold;
    font-size: 2rem;
    color: #fff;
    
    cursor: pointer;
`