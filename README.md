# Mock User API — Testes Manuais

## Descrição do repositório
Este repositório contém testes manuais e testes automatizados da **Mock User API**, uma API REST simples para gerenciar usuários (``GET``, ``POST``, ``PUT``, ``DELETE``).  
Hoje o repo engloba:
- documentação manual
- automação com Cypress usando uma arquitetura organizada em services -> asserts -> actions -> testes

Este repositório é complementar ao repositório da API em si (https://github.com/mariahinada/mock-user-api), servindo exclusivamente para validação e documentação de QA.

## Estrutura do repositório
```text
├── .DS_Store
├── .gitattributes
├── .gitignore
├── cypress
│  ├── e2e
│  │  ├── actions
│  │  │  └── users
│  │  │    ├── delete-user.action.ts
│  │  │    ├── get-user-id.action.ts
│  │  │    ├── get-users.action.ts
│  │  │    ├── post-user.action.ts
│  │  │    └── put-user.action.ts
│  │  ├── asserts
│  │  │  ├── .DS_Store
│  │  │  └── users
│  │  │    ├── delete-user-assert.ts
│  │  │    ├── get-user-id.assert.ts
│  │  │    ├── get-users.assert.ts
│  │  │    ├── post-user.assert.ts
│  │  │    └── put-user.assert.ts
│  │  ├── services
│  │  │  └── users
│  │  │    ├── delete-user.service.ts
│  │  │    ├── get-user.service.ts
│  │  │    ├── post-user.service.ts
│  │  │    └── put-user.service.ts
│  │  └── users
│  │    ├── delete-user.cy.ts
│  │    ├── get-user-id.cy.ts
│  │    ├── get-users.cy.ts
│  │    ├── post-user.cy.ts
│  │    └── put-user.cy.ts
│  ├── fixtures
│  │  └── users
│  │    └── valid-user.json
│  ├── screenshots
│  ├── support
│  │  ├── commands.ts
│  │  └── e2e.js
│  └── tsconfig.json
├── cypress.config.ts
├── docs
│  ├── automated
│  │  └── premissas-automacao.md
│  └── manual
│    ├── collection-postman.json
│    ├── evidences
│    │  ├── CT-001.png
│    │  ├── CT-002.png
│    │  ├── CT-003.png
│    │  ├── CT-004.png
│    │  ├── CT-005.png
│    │  ├── CT-006.png
│    │  └── CT-007.png
│    ├── plano-de-teste.md
│    └── relatorio-de-testes.md
├── package-lock.json
├── package.json
├── README.md
└── tests
  ├── .DS_Store
  └── manual
    ├── .DS_Store
    └── casos-de-teste.md
```
## Como executar os testes automatizados

## 1. Pré-requisitos
- Instalar as dependências
```bash
npm install
```

- Abrir o Cypress
```bash
npx Cypress open
```

- Rodar todos os testes (opção alternativa) - headless
```bash
npx Cypress run
```

## Arquitetura dos testes automatizados

Os testes seguem o padrão:
1. `Services` - faz a request
2. `Asserts` - faz as validações
3. `Actions` - orquestra e organiza o fluxo
4. `Testes` - onde tudo é enfim chamado 

## Como executar os testes manuais
### 1. Pré-requisitos
- Ter a **Mock User API** rodando localmente: `http://localhost:3001` (instrução no rep. da api mencionado anteriormente)
- Node.js e npm instalados (para executar a API)
- Postman (para executar a collection de testes)

### 2. Executando os testes manuais
- Abra a **collection** `docs/collection-postman.json` no Postman  
- Execute os endpoints conforme descrito nos **casos de teste** (`manual-tests/casos-de-teste.md`)  

## Documentação de testes manuais

- **Plano de Teste:** [`docs/plano-de-teste.md`](docs/plano-de-teste.md)  
  Contém o que será testado, como será testado e qual o objetivo e ferramentas utilizadas.

- **Casos de Teste:** [`manual-tests/casos-de-teste.md`](manual-tests/casos-de-teste.md)  
  Contém todos os cenários mapeados com pré condições, passos e resultados esperados. 

- **Relatório de Testes:** [`docs/relatorio-de-testes.md`](docs/relatorio-de-testes.md)  
  Resumo da execução, status dos testes, observações e conclusões.  

- **Evidências:** [`docs/evidencias/`](docs/evidencias/)  
  Prints das execuções de cada caso de teste.

## Observações

- Todos os dados da API são armazenados **em memória**, ou seja, ao reiniciar a API, todos os usuários são resetados.  
- Este repositório é focado em **testes manuais**, sem automação. Futuras evoluções podem incluir testes automatizados.
