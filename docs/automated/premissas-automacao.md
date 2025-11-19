# Premissas da Automação

## Porta da API

Por padrão no projeto é a 3001, mas ela pode ser redefinida.

## BaseUrl

`http://localhost:3001`

## Dados essenciais do contrato

Todo usuário deve possuir:
- id (string, UUID gerado automaticamente)
- name (string)
- company (string)
- email (string)
- isActive (boolean)

## Endpoints que serão automatizados

- GET /users
- GET /users/:id
- POST /users
- PUT /users/:id
- DELETE /users/:id

## Fora do escopo
- Testes de UI
- Testes de performance
- Testes de carga
- Validações que não existem no back-end