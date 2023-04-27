const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3001;

const urlencodedParser = bodyParser.urlencoded({ extended: false });

app.set('view engine', 'ejs');

app.get('/hello', (request, response) => {
  response.render('hello');
});

app.get('/login', (req, res) => {
  res.render('login/login.ejs');
});

app.post('/login', urlencodedParser, (request, response) => {
  console.info('User:', request.body);
  response.render('login/login.ejs');
});

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.debug(`Executando na porta ${PORT}`);
});
