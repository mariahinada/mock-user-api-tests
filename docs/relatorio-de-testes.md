# Relatório de Testes – Mock User API

**Data:** 16/11/1999  
**Responsável:** Mariah Inada
**Ambiente:** Localhost (Node.js em http://localhost:3001)  

## Endpoints testados
- GET /users
- GET /users/:id
- POST /users
- PUT /users/:id
- DELETE /users/:id

## Resumo da execução
- Total de casos: 7
- Passaram: 6
- Falharam: 1

## Casos testados
| ID     | Descrição                               | Res.   | Evidência                  |
| ------ | --------------------------------------- | -------| ---------------------------|
| CT-001 | Deve listar usuários existentes         | Passou | docs/evidencias/CT-001.png |
| CT-002 | Deve criar usuário com dados válidos    | Passou | docs/evidencias/CT-002.png |
| CT-003 | Deve retornar erro ao enviar body vazio | Falhou | docs/evidencias/CT-003.png |
| CT-004 | Deve retornar um usuário existente.     | Passou | docs/evidencias/CT-004.png |
| CT-005 | Deve retornar 404 para ID inexistente.  | Passou | docs/evidencias/CT-005.png |
| CT-006 | Deve atualizar os dados de um usuário   | Passou | docs/evidencias/CT-006.png |
| CT-007 | Deve deletar usuário existente.         | Passou | docs/evidencias/CT-007.png |

## Observações
- Dados resetam ao reiniciar a API (comportamento esperado).
- CT-003 não tem retorno de erro ao enviar body vazio.

## Conclusão
A API apresenta comportamento estável nos principais endpoints.  
CT-003 requer ajuste de validação de entrada.  