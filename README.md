# 🏦 banco-api-performance

## Introdução
Este repositório contém testes de performance para a API do Banco, utilizando **JavaScript** e **[k6](https://k6.io/)**. O objetivo é avaliar o desempenho sob diferentes cargas, coletar métricas e gerar relatórios automatizados. É possível acompanhar o resultado em tempo real via web dashboard ou exportar relatórios em formato HTML.

---

## Tecnologias Utilizadas
- **[k6](https://k6.io/)** – ferramenta de testes de carga e performance escrita em Go, com scripts em JS.
- **JavaScript (ECMAScript Module)** – definição dos testes em arquivos `.js`.

---

## Estrutura do Projeto
banco-api-performance/
├── tests/
│ ├── login.test.js
│ ├── contas.test.js
│ ├── transacoes.test.js
│ └── helpers/
│ └── utils.js
├── data/
│ └── payloads.json
├── .gitignore
└── README.md

---

## Objetivo de Cada Grupo de Arquivos
- **tests/login.test.js** – Simula login de usuários, validando tempo de resposta e sucesso da autenticação.  
- **tests/contas.test.js** – Realiza consultas/listagem, medindo tempo médio e percentis.  
- **tests/transacoes.test.js** – Executa transações, monitorando throughput e taxa de erro.  
- **tests/helpers/utils.js** – Funções auxiliares (payloads, headers, etc.).  
- **data/payloads.json** – Exemplos de payloads com cenários variados.

---

## Modo de Instalação e Execução

### 1. Clone o repositório
```bash
git clone https://github.com/bruno-reis-castro/banco-api-performance.git
cd banco-api-performance

## 2. Instale o k6
macOS: brew install k6

Windows: choco install k6

Linux: siga a documentação oficial.

## 3. Configure a variável de ambiente