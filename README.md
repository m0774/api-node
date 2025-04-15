# 📊 API de Monitoramento com Prometheus e Grafana

Este projeto é uma API Node.js simples que expõe métricas personalizadas para serem coletadas pelo **Prometheus**, e visualizadas no **Grafana**.

## 🧱 Tecnologias

- Node.js
- Express
- prom-client
- Prometheus (via Docker)
- Grafana (via Docker)
- Docker Compose

---

## 🚀 Como rodar o projeto

### 1. Instale as dependências da API

```bash
npm install
```

### 2. Inicie a API localmente

```bash
node src/index.js
```

A API ficará disponível em:  
📍 `http://localhost:3001`

O endpoint de métricas estará em:  
📍 `http://localhost:3001/metrics`

---

### 3. Suba Prometheus e Grafana com Docker Compose

```bash
docker-compose up -d
```

- Prometheus: http://localhost:9090  
- Grafana: http://localhost:3000  
  - Usuário: `admin`  
  - Senha: `admin`

---

## 📡 Fluxo das Métricas

```
API Node.js (/metrics) --> Prometheus --> Grafana
```

- A API expõe métricas em `/metrics`
- O Prometheus coleta essas métricas periodicamente
- O Grafana consulta o Prometheus e exibe dashboards

---

## 📦 Estrutura do projeto

```
api-node/
├── src/
│   └── index.js
├── prometheus.yml
├── docker-compose.yml
├── package.json
├── .gitignore
└── README.md
```

---

## 💡 Exemplos de Métricas

- `api_requisicoes_total`: total de requisições recebidas pela API

---

## ✨ Próximos passos

- Adicionar mais métricas (tempo de resposta, erros, etc)
- Criar dashboards personalizados no Grafana
- Exportar métricas de outras aplicações

---

Feito com 💻 por Gabriel