# Plano de Teste 

## O que será testado

- O comportamento dos endpoints REST da API de usuários (**GET**,**POST**,**PUT**,**DELETE**).

- O fluxo completo de criação, leitura, atualização e remoção dos usuários.
- O retorno das mensagens, status codes e estrutura das respostas.
- A estabilidade e consistência dos dados armazenados em memória durante a execução.

## Como será testado

- Testes manuais e exploratórios usando Postman.
- Execução da collection do Postman.
- Validação dos retornos JSON.

## Qual o objetivo

- Garantir que a API de usuário funciona corretamente com os fluxos principais.
- Validar que cada endpoint responde com dados consistentes e dados adequados.
- Identificar possíveis falhas de regra, comportamento inesperado e lacunas na API.

## Quais ferramentas
Postman — Execução de testes manuais e coleção.
Node + npm — Para executar a API.
VSCode — Edição e inspeção dos arquivos.
Git/GitHub — Versionamento dos documentos e evolução do repositório.