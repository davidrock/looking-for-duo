import express from 'express';

const app = express();

app.get('/ads', (request, response) => {
  return response.json('Acessou Ads');
  console.log('Acessou ads!');
});

app.listen(3333);
