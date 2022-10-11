"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const db_1 = __importDefault(require("./database/db"));
const app = (0, express_1.default)();
const port = 3000;
const db = new db_1.default();
db.createCollection();
//db.getUsers();
app.use(express_1.default.static('public'));
app.set('views', `${__dirname}/views`);
app.set('view engine', 'ejs');
app.get('/login', (reqquest, response) => {
    response.render('login', {
        subject: 'Pagina de login'
    });
});
app.get('/cadastrar', (req, res) => {
    res.send('<h1 color="green">Cadastrar Usuários</h1>');
});
app.get('/listar', (req, res) => {
    res.send('<h1 color="green">Listar Usuários</h1>');
});
app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${port}/login`);
});
