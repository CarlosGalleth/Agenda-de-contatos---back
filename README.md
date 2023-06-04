# contactsBook

## Tabela de Conteúdos

- [Visão Geral](#1-visão-geral)
- [Iniciar a Api localmente](#3-início-rápido)
  - [Variáveis de Ambiente](#31-variáveis-de-ambiente)
  - [Instalando dependências](#32-instalando-dependências)
  - [Migrations](#33-migrations)
  - [Inicializar o servidor](#34-inicializar-o-servidor)

---

## 1. Visão Geral

Um pouco das tecnologias usadas.

- [NestJs](https://nestjs.com)
- [PostgreSQL](https://www.postgresql.org/)

URL base da aplicação:
http://localhost:3000/

---

## 3. Iniciar a Api localmente

[ Voltar para o topo ](#tabela-de-conteúdos)

### 3.1. Variáveis de Ambiente

Em seguida, crie um arquivo **.env**, copiando o formato do arquivo **.env.example**:

```
cp .env.example .env
```

Seguindo os exemplos presentes no .env.example:</br>
Configure suas variáveis de ambiente com suas credenciais do Postgres e uma nova database da sua escolha.</br>

### 3.2. Instalando dependências

Instale as dependências com o comando:

```bash
npm install
```

### 3.3. Migrations

Execute as migrations com o comando:

```bash
nest npx prisma migrate dev
```

### 3.4. Inicializar o servidor

Por fim, utilize o seguinte comando para rodar o servidor localmente:

```bash
nest start
```

---

## 4. Documentação das rotas

---

<h2 align = "center"> Login </h2>

`POST /login - FORMATO DA REQUISIÇÃO`

```json
{
  "email": "email@email.com",
  "password": "123456"
}
```

Caso dê tudo certo, a resposta será assim:

`POST /login - FORMATO DA RESPOSTA - STATUS 201`

```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2MDcxODM3NzYsImV4cCI6MTYwNzQ0Mjk3Niwic3ViIjoiMmE3NWUxMmQtZmQxYy00ODFkLWJhODgtNGQ4YjE3MTAzYjJhIn0.UY67X23mPYAAzT43uFWZDHPUakd2STo5w4AuOcppkyQ"
}
```

<h2 align ='center'> Criação de usuário </h2>

`POST /users - FORMATO DA REQUISIÇÃO`

```json
{
  "email": "email@email.com",
  "password": "senha123",
  "name": "Seu Nome",
  "phone": "99999999"
}
```

Caso dê tudo certo, a resposta será assim:

`POST /users - FORMATO DA RESPOSTA - STATUS 201`

```json
{
  "id": "c110dbb6-beb9-4682-ab63-2c12a570d66b",
  "name": "Seu Nome",
  "email": "email@email.com",
  "phone": "99999999"
}
```

<h2 align ='center'> Atualização de usuário </h2>

`POST /users/:id - FORMATO DA REQUISIÇÃO`

```json
{
  "email": "emailAtualizado@email.com",
  "password": "senha123",
  "name": "Seu Nome",
  "phone": "99999999"
}
```

Caso dê tudo certo, a resposta será assim:

`POST /users/:id - FORMATO DA RESPOSTA - STATUS 200`

```json
{
  "id": "c110dbb6-beb9-4682-ab63-2c12a570d66b",
  "name": "Seu Nome Atualizado",
  "email": "emailAtualizado@email.com",
  "phone": "99999999"
}
```

<h2 align ='center'> Listando usuário </h2>

Nessa aplicação o usuário deve estar autenticado, podendo acessar aos seus dados e seus contatos

`GET /users/:id - FORMATO DA RESPOSTA - STATUS 200`

```json
[
  {
    "id": "c110dbb6-beb9-4682-ab63-2c12a570d66b",
    "name": "Seu Nome",
    "email": "email@email.com",
    "phone": "99999999"
  }
]
```

<h2 align ='center'> Deletar usuario </h2>

Nessa aplicação o usuário deve estar autenticado, podendo deletar sua conta

`DELETE /users/:id - FORMATO DA RESPOSTA - STATUS 200`

<h2 align ='center'> Criando contato </h2>

`POST /contacts - FORMATO DA REQUISIÇÃO`

```json
{
  "name": "Nome do Contato",
  "email": "email@email.com",
  "phone": "99999999"
}
```

Caso dê tudo certo, a resposta será assim:

`POST /contacts - FORMATO DA RESPOSTA - STATUS 201`

```json
{
  "id": "c110dbb6-beb9-4682-ab63-2c12a570d66b",
  "name": "Nome do Contato",
  "email": "email@email.com",
  "phone": "99999999"
}
```

<h2 align ='center'> Listando Contatos </h2>

`GET /contacts - FORMATO DA REQUISIÇÃO`

`GET /contacts - FORMATO DA RESPOSTA - STATUS 200`

```json
[
  {
    "id": "c110dbb6-beb9-4682-ab63-2c12a570d66b",
    "name": "Nome do Contato",
    "email": "email@email.com",
    "phone": "99999999",
    "userId": "299233fd-4fdc-4559-bf5c-2db0680a007"
  },
  {
    "id": "c110dbb6-beb9-4682-ab63-2c12a570d66b",
    "name": "Nome do Contato",
    "email": "email@email.com",
    "phone": "99999999",
    "userId": "299233fd-4fdc-4559-bf5c-2db0680a007"
  },
  {
    "id": "c110dbb6-beb9-4682-ab63-2c12a570d66b",
    "name": "Nome do Contato",
    "email": "email@email.com",
    "phone": "99999999",
    "userId": "299233fd-4fdc-4559-bf5c-2db0680a007"
  }
]
```

<h2 align ='center'> Listando um contato específico </h2>

`GET /contacts/:id - FORMATO DA REQUISIÇÃO`

`GET /contacts - FORMATO DA RESPOSTA - STATUS 200`

```json
{
  "id": "c110dbb6-beb9-4682-ab63-2c12a570d66b",
  "name": "Nome do Contato",
  "email": "email@email.com",
  "phone": "99999999",
  "userId": "299233fd-4fdc-4559-bf5c-2db0680a007"
}
```

<h2 align ='center'> Atualizando contato </h2>

`PATCH /contacts/:id - FORMATO DA REQUISIÇÃO`

```json
{
  "name": "Nome do Contato Atualizado",
  "email": "emailAtualizado@email.com",
  "phone": "88888888"
}
```

Caso dê tudo certo, a resposta será assim:

`PATCH /contacts - FORMATO DA RESPOSTA - STATUS 200`

```json
{
  "id": "c110dbb6-beb9-4682-ab63-2c12a570d66b",
  "name": "Nome do Contato Atualizado",
  "email": "emailAtualizado@email.com",
  "phone": "88888888",
  "userId": "299233fd-4fdc-4559-bf5c-2db0680a007"
}
```

<h2 align ='center'> Excluindo um contato </h2>

`DELETE /contacts/:id - FORMATO DA REQUISIÇÃO`

`DELETE /contacts/:id - FORMATO DA RESPOSTA - STATUS 200`
