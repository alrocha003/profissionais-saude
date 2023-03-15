let express = require('express');
let bodyParser = require('body-parser');
let app = express();
const PORT = 3000;


app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded());

app.get('/hello', (request, response) => {
    response.render('hello');
});

app.get('/login', (request, response) => {
    response.render('login/login.ejs');
});

app.listen(PORT, () => {
    console.debug(`Executando na porta ${PORT}`);
});