import express, { Express, Request, response, Response } from 'express';
import Database from './database/db';
import UserModel from './models/user';
const app: Express = express();
const port = 3000;

const db: Database = new Database();

let user = new UserModel(db.db, 'Tais Virissimo Rocha', 'Empresária', 'taverissimo@gmail.com', 28);
user.save();

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
    console.log(`⚡️[server]: Server is running at http://localhost:${port}/login`);
});