"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const db_1 = __importDefault(require("./database/db"));
const user_1 = __importDefault(require("./models/user"));
const app = (0, express_1.default)();
const port = 3000;
const db = new db_1.default();
let user = new user_1.default(db.db, 'Tais Tavares Verissimo Rocha', 'Empresária', 'taverissimo@gmail.com', 28);
user.save();
app.use(express_1.default.static('public'));
app.set('views', `${__dirname}/views`);
app.set('view engine', 'ejs');
app.get('/login', (request, response) => {
    response.render('login', {
        subject: 'Pagina de login'
    });
});
app.get('/cadastrar', (request, response) => {
    response.send('<h1 color="green">Cadastrar Usuários</h1>');
});
app.get('/listar', (request, response) => {
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
