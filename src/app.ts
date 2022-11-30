import express, { Express, Request, response, Response } from 'express';
import Database from './database/db';
import UserModel from './models/user';
const app: Express = express();
const port = 3000;

const db: Database = new Database();

let user = new UserModel(db.db, 'Tais Tavares Verissimo Rocha', 'Empresária', 'taverissimo@gmail.com', 28);
user.save();


app.use(express.static('public'));
app.set('views', `${__dirname}/views`);
app.set('view engine', 'ejs');

app.get('/login', (request: Request, response: Response) => {
    response.render('login', {
        subject: 'Pagina de login'
    });
});

app.get('/cadastrar', (request: Request, response: Response) => {
    response.send('<h1 color="green">Cadastrar Usuários</h1>');
});

app.get('/listar', (request: Request, response: Response) => {
    response.render('listar/profissionais', {
        profissionals: [
            {
                'nome': 'Paulo',
                'idade': 12
            },
            {
                'nome': 'Jõao',
                'idade': 15,
            },
            {
                'nome': 'Marina',
                'idade': 25,
            }
        ]
    });
});

app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${port}/login`);
});