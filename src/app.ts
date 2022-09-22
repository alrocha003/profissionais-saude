import express, { Express, Request, response, Response } from 'express';

const app: Express = express();
const port = 3000;

app.use(express.static('public'));
app.set('views', `${__dirname}/views`);
app.set('view engine', 'ejs');

app.get('/login', (reqquest: Request, response: Response) => {
    response.render('login', {
        subject: 'Pagina de login'
    });
});

app.get('/cadastrar', (req: Request, res: Response) => {
    res.send('<h1 color="green">Cadastrar Usuários</h1>');
});

app.get('/listar', (req: Request, res: Response) => {
    res.send('<h1 color="green">Listar Usuários</h1>');
});

app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at https://localhost:${port}`);
});