'use client'

import Navbar from "@/components/Navbar";
import {Container,
    HeaderCreateDiv,
    BackButton,
    CampaignForm, 
    Input, 
    InputDescription,
    FileInput,
    ButtonDiv,  
    ButtonConfirm } 
    from "./CreateCampaign.style";
import Link from "next/link";
import React, { useState } from "react";
import api from "@/services/api";

interface Campaign {
    name: string
    description: string
    target_value: number
    image: string
}

const CreateCampaign: React.FC = () => {
    const [campaign, setCampaign] = useState<Campaign>({
        name: '',
        description: '',
        target_value: 0,
        image: ''
    })

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        try {
            const response = await api.post("/campaign",  campaign);
            console.log(response.data);
            window.location.reload();
        } catch (error) {
            console.error('Error posting the order data', error);
        }
      };

    return (
        <>
            <Navbar/>
            <Container>
                <HeaderCreateDiv>
                    <p>Criar Nova Campanha</p>
                    <Link href={"/"}>
                        <BackButton>
                            Voltar
                        </BackButton>
                    </Link>
                </HeaderCreateDiv>
                <CampaignForm onSubmit={handleSubmit}>
                    <label htmlFor="campaign">
                        <p>Nome da Campanha</p>
                    </label>
                    <Input
                        type="text"
                        name="campaign"
                        placeholder="Nome da campanha"
                        onChange={(e) => setCampaign({ ...campaign, name: e.target.value })}
                    />
                    <label htmlFor="target_value">
                        <p>Valor Necessário (R$)</p>
                    </label>
                    <Input
                        type="number"
                        name="target_value"
                        placeholder="0,00"
                        onChange={(e) => setCampaign({ ...campaign, target_value: Number(e.target.value) })}
                    />
                    <label htmlFor="description">Descrição</label>
                    <InputDescription
                        name="description"
                        placeholder="Descrição"
                        onChange={(e) => setCampaign({ ...campaign, description: e.target.value })}
                    />
                    <label htmlFor="image_campaign">Imagem da Campanha</label>
                    <FileInput
                        type="file"
                        name="image_campaign"
                        accept="image/*"
                        onChange={(e) => {
                        if (e.target.files && e.target.files[0]) {
                            const file = e.target.files[0];
                            setCampaign({ ...campaign, image: file.name });
                        }
                        }}
                    />

                    <ButtonDiv>
                        <ButtonConfirm type="submit">
                            Cadastrar
                        </ButtonConfirm>
                    </ButtonDiv>
                </CampaignForm>
            </Container>
        </>
    )
}
export default CreateCampaign;