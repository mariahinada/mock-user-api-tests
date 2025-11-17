# Mock User API — Testes Manuais

## Descrição do Repositório
Este repositório contém os testes manuais da **Mock User API**, uma API REST simples para gerenciar usuários (GET, POST, PUT, DELETE).  
Ele inclui **plano de teste, casos de teste, evidências e relatório de execução**, com o objetivo de documentar e validar o comportamento da API.

Este repositório é complementar ao repositório da API em si (https://github.com/mariahinada/mock-user-api), servindo exclusivamente para QA e documentação de testes.

## Estrutura do Repositório
```text
.
├── README.md
├── docs
│   ├── collection-postman.json
│   ├── evidencias
│   │   ├── CT-001.png
│   │   ├── CT-002.png
│   │   ├── CT-003.png
│   │   ├── CT-004.png
│   │   ├── CT-005.png
│   │   ├── CT-006.png
│   │   └── CT-007.png
│   ├── plano-de-teste.md
│   └── relatorio-de-testes.md
└── manual-tests
    └── casos-de-teste.md
```

### 1. Pré-requisitos
- Ter a **Mock User API** rodando localmente: `http://localhost:3001` (instrução no rep. da api mencionado anteriormente)
- Node.js e npm instalados (para executar a API)
- Postman (para executar a collection de testes)

### 2. Executando os testes
- Abra a **collection** `docs/collection-postman.json` no Postman  
- Execute os endpoints conforme descrito nos **casos de teste** (`manual-tests/casos-de-teste.md`)  

## Documentação de Teste

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
