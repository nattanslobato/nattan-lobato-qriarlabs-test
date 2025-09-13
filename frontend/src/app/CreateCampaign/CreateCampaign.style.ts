import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 40%;
    margin: 2rem 2rem;
    background-color: #fff;
    border-radius: 1rem;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`

export const HeaderCreateDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    padding: 1rem 4rem;
    margin: 1rem 0 0 0;
    p {
        font-size: 1.5rem;
        font-weight: bold;
        color: #000;
        margin: 0;
    }
`
export const BackButton = styled.button`
    display: flex;
    align-items: center;
    border: none;
    border-radius: 0.5rem;
    padding: 0.8rem;
    font-weight: 600;
    font-size: 1rem;
    background-color: #518fcd;
    color: #fff;
    
    cursor: pointer;
`

export const CampaignForm = styled.form`
    display: flex;
    flex-direction: collumn;
    align-items: center;
    flex-wrap: wrap;
    padding: 0 4rem;
    label {
        font-size: 1rem;
        font-weight: 600;
        color: #000;
        margin: 0;
        padding: 0;
    }
`

export const Input = styled.input`
    width: 100%;
    height: 3rem;
    border-radius: 1rem;
    margin: 0 0 1rem 0;
    padding: 1rem 2rem;
    background-color: #F5F5F5;

`

export const InputDescription = styled.textarea`
    width: 100%;
    min-height: 8rem;
    border: 1px solid #000;
    border-radius: 1rem;
    margin: 0.75rem 0 1rem 0;
    padding: 1rem 2rem;
    background-color: #F5F5F5;
    resize: none;
`

export const FileInput = styled.input.attrs({ type: 'file' })`
    width: 100%;
    min-height: 1rem;
    border: 1px solid #000;
    border-radius: 1rem;
    cursor: pointer;
    margin-top: 0.75rem;
    padding: 1rem 2rem;

    &::-webkit-file-upload-button {
        background: #518fcd;
        color: #fff;
        border: none;
        border-radius: 0.5rem;
        margin-right: 1rem;
        padding: 0.5rem 1rem;
        cursor: pointer;
        font-weight: bold;
        
    }
`

export const ButtonDiv = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    margin: 2rem 0;
`

export const ButtonConfirm = styled.button`

    background-color: #518fcd;
    border: none;
    border-radius: 1rem;
    padding: 0.8rem;
    text-align: center;
    font-weight: bold;
    font-size: 1.5rem;
    color: #fff;
    
    cursor: pointer;
`