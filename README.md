# Trainee - Technical Test

Este projeto consiste em uma aplicação web utilizando Node.js, Next.js, Prisma ORM, PostgreSQL e Docker Container, chamada de Solidariza. O objetivo é desenvolver, da melhor forma possível, a aplicação solicitada pela empresa QriarLabs como parte do teste técnico para uma vaga de Trainee.

## Objetivo e Funcionalidades
A construção desta aplicação tem como objetivo auxiliar os usuários na gerência de campanhas de doação.

As funcionalidades da aplicação são:
- O usuário poderá cadastrar uma nova campanha;
- O usuário poderá visualizar todas as campanhas, podendo alterar suas informações ou deletá-la;;
- O usuário poderá visualizar uma campanha específica;
- O usuário poderá cadastrar doações em uma campanha;
- O usuário poderá visualizar todas as doações para uma campanha;
- O usuário poderá selecionar uma doação específica de uma campanha, podendo alterar suas informações ou deletá-la;

## Requisitos
- NodeJS +20.11
- Docker +25.2

## Execução
Para executar a aplicação, siga as etapas:
1. Certifique-se de ter as versões de NodeJS e Docker instaladas e funcionando corretamente em sua máquina;
    

2. Clone o repositório deste projeto 
    - Abra a pasta onde deseja clonar o repositório e execute o comando "git clone https://github.com/nattanslobato/nattan-lobato-qriarlabs-test.git"

3. Abra o projeto utilizando o Visual Studio.

4. Siga os passos a seguir:

    ### API

     Execute o comando ``` cd backend ``` para entrar na pasta "backend"
     
     Dentro da pasta backend, execute o comando ``` npm install ``` ou ``` yarn ``` para instalar as dependencias.

     Dentro da pasta backend, ha um arquivo **docker-compose.yml** responsavel pela configuracao de um container com uma imagem PostgreSQL. Execute o comando ``` docker-compose up -d``` para subir o container.

     Utilizando uma ferramenta de administracao de banco de dados, indico utilizar o DBeaver, faca a conexao com o banco com as seguintes configuracoes:
        
        - Host: localhost
        - Banco de dados: solidariza
        - Usuario: solidariza
        - Senha: password
        - Porta: 5433
    
    Crie um arquivo ```.env``` e coloque ```DATABASE_URL="postgresql://solidariza:password@localhost:5433/solidariza?schema=public"```, que sera responsavel pela comunicacao do prisma com o banco de dados.
    
    Execute o comando ```npx prisma db push``` ou ```yarn prisma db push``` para enviar os schemas e migrations para o banco.

    Por fim, execute o comando ```npm run dev``` ou ```yarn dev``` para rodar a API.

    Abra em seu navegador http://localhost:4000/ para verificar a API funcionando.


    ### Frontend
    
    Abra um novo terminal e execute o comando ```cd frontend``` para entrar na pasta de Frontend

    Dentro da pasta frontend, execute o comando ``` npm install ``` ou ``` yarn ``` para instalar as dependencias.

    Apos instalar todas as dependencias, execute o comando ```npm run dev``` ou ```yarn dev``` para inicializar o frontend

    Abra em seu navegador http://localhost:3000/


## Utilizacao da API

Com a API rodando, voce pode testar os endpoints, utilizando ferramentas como Postman ou Insomnia, com as urls a seguir:

### Campaigns

- Para buscar todas as campanhas do banco de dados: **getCampaigns**
    
    - Metodo: GET
    - http://localhost:4000/campaign

- Para buscar uma campanha pelo Id: **getCampaignById**

    - Metodo: GET
    - http://localhost:4000/campaign/${id}

- Para criar uma campanha: **createCampaign**

    - Metodo: POST
    - http://localhost:4000/campaign

- Para atualizar uma campanha: **updateCampaign**

    - Metodo: PUT
    - http://localhost:4000/campaign

- Para deletar uma campanha: **deleteCampaign**

    - Metodo: DELETE
    - http://localhost:4000/campaign/${id}

### Donations

- Para buscar todas as doacoes do banco de dados: **getDonations**
    
    - Metodo: GET
    - http://localhost:4000/donation

- Para buscar uma doacao pelo Id: **getDonationById**

    - Metodo: GET
    - http://localhost:4000/donation/${id}

- Para criar uma doacao: **createDonation**

    - Metodo: POST
    - http://localhost:4000/donation

- Para atualizar uma doacao: **updateDonation**

    - Metodo: PUT
    - http://localhost:4000/donation

- Para deletar uma doacao: **deleteDonation**

    - Metodo: DELETE
    - http://localhost:4000/donation/${id}




