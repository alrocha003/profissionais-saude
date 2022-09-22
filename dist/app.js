"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const port = 3000;
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
    console.log(`⚡️[server]: Server is running at https://localhost:${port}`);
});
