const express = require('express');
const client = require('prom-client');

const app = express();
const port = 3000;

// Registry de métricas
const register = new client.Registry();
client.collectDefaultMetrics({ register });

// Exemplos de métricas customizadas
const counter = new client.Counter({
  name: 'api_requests_total',
  help: 'Número total de requisições na API',
});
register.registerMetric(counter);

const gauge = new client.Gauge({
  name: 'random_gauge_value',
  help: 'Valor aleatório de gauge',
});
register.registerMetric(gauge);

// Middleware pra incrementar o counter
app.use((req, res, next) => {
  counter.inc();
  gauge.set(Math.random() * 100); // valor aleatório
  next();
});

// Endpoint principal da API
app.get('/', (req, res) => {
  res.send('Hello Prometheus!');
});

// Endpoint de métricas
app.get('/metrics', async (req, res) => {
  res.set('Content-Type', register.contentType);
  res.end(await register.metrics());
});

app.listen(port, () => {
  console.log(`API rodando em http://localhost:${port}`);
});
