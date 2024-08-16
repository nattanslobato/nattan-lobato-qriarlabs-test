'use client'

import Navbar from "@/components/Navbar";
import {HeaderCreateDiv, CampaignForm, Input, TitleDiv, InputDescription, UploadImageDiv, ImageUpload, ButtonDiv, ButtonBack, ButtonConfirm } from "./CreateCampaign.style";
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
        } catch (error) {
            console.error('Error posting the order data', error);
        }
      };

    return (
        <div>
            <Navbar/>
                <HeaderCreateDiv>
                <TitleDiv>
                    <h1>Criar Campanha</h1>
                </TitleDiv>
                </HeaderCreateDiv>

                <CampaignForm onSubmit={handleSubmit}>
                    <Input
                        type="text"
                        name="campaign"
                        placeholder="Nome da campanha"
                        onChange={(e) => setCampaign({ ...campaign, name: e.target.value })}
                    />
                    <Input
                        type="number"
                        name="target_value"
                        placeholder="Valor alvo"
                        onChange={(e) => setCampaign({ ...campaign, target_value: Number(e.target.value) })}
                    />
                    <InputDescription
                        name="description"
                        placeholder="Descrição"
                        onChange={(e) => setCampaign({ ...campaign, description: e.target.value })}
                    />
                    <UploadImageDiv>
                        <ImageUpload src={"/upload_image.png"}/>
                        <Input
                            type="text"
                            name="image_campaign"
                            placeholder="Imagem da campanha"
                            onChange={(e) => setCampaign({ ...campaign, image: e.target.value })}

                        />
                    </UploadImageDiv>
                    <ButtonDiv>
                        <Link href={"/"}>
                            <ButtonBack>
                                Voltar
                            </ButtonBack>
                        </Link>
                        <ButtonConfirm
                            type="submit"
                            >
                            Cadastrar
                        </ButtonConfirm>

                    </ButtonDiv>
                </CampaignForm>
        </div>
    )
}
export default CreateCampaign;