# Casos de Teste - Mock User API

## (CT-001) GET/users - Deve listar usuários existentes

Objetivo: Validar que a API retorna a lista completa de usuários.

Pré-condição: 
- API em execução.

Passos:

1. Enviar requisição GET para */users*.

Resultado esperado:
- Status 200
- Corpo contendo a lista de usuários
- Cada usuário com os campos: *id*, *name*, *company*, *email*, *isActive*

## (CT-002) POST/users - Deve criar usuário com dados válidos

Objetivo: Validar a criação de um novo usuário.

Passos:

1. Enviar POST com body válido:

{
    "name": "Usuário",
    "company": "Compania",
    "email": usuario@email.com"
}

Resultado esperado:
- Status 201
- *id* gerado automaticamente
- *isActive* padrão = true

# (CT-003) POST /users — Deve retornar erro ao enviar body vazio

Objetivo: Validar regras de preenchimento mínimo.

Passos:
1. Enviar POST sem body ou com {}.

Resultado esperado:
- Status 400
- Mensagem indicando campos obrigatórios ausentes.

## (CT-004) GET /users/:id — Deve retornar um usuário existente

Objetivo: Validar consulta por ID.

Pré-condição: 
- Um usuário já criado.

Passos:
1. Criar usuário (POST)
2. Usar o id gerado no GET /users/:id

Resultado esperado:
- Status 200
- Dados exatamente iguais aos criados no POST.

## (CT-005) GET /users/:id — Deve retornar 404 para ID inexistente

Objetivo: Validar comportamento esperado para IDs não encontrados.

Passos:
1. Enviar GET com ID inexistente (ex.: /users/123).

Resultado esperado:
Status 404
Mensagem de “Usuário não encontrado”.

## (CT-006) PUT /users/:id — Deve atualizar os dados de um usuário

Objetivo: Validar atualização parcial ou total.

Pré-condição: 
- Usuário criado

Passos:
1. Criar usuário.
2. Enviar PUT com dados atualizados:
{
  "name": "Nome Atualizado"
}

Resultado esperado:
- Status 200
- Mensagem de sucesso
- Campo alterado refletido no objeto retornado.

## (CT-007) DELETE /users/:id — Deve deletar usuário existente

Objetivo: Validar remoção de usuário.

Passos:
1. Criar usuário
2. Enviar DELETE com o ID criado.

Resultado esperado:
- Status 200
- Mensagem: “Usuário deletado com sucesso”
- GET no mesmo ID deve retornar 404