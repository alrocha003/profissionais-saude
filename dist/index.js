"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prompt_sync_1 = __importDefault(require("prompt-sync"));
const function_cadastro_1 = require("./commons/function-cadastro");
console.debug("\nBem vindo ao projeto - πΏππΎπ΅πΈππΈπΎπ½π°πΈπ π³π° ππ°ΓΊπ³π΄\n");
let input = (0, prompt_sync_1.default)();
let option = 0;
let cadastra = new function_cadastro_1.Cadastra();
while (option != 5) {
    console.log("+========= Lista Funcionalidades =========+");
    console.log("|1. Cadastrar Paciente          |");
    console.log("|2. Cadastrar MΓ©dico            |");
    console.log("|3. Listar Paciente/MΓ©dico      |");
    console.log("|4. Remover cadastro            |");
    console.log("|5. Sair                        |");
    console.log("+================================+");
    option = +input("Escolha uma funcionalidade : --> ");
    switch (option) {
        case 1:
            cadastra.cadastroPaciente();
            break;
        case 2:
            cadastra.cadastroMedico();
            break;
        case 3:
            cadastra.listar();
            break;
        case 4:
            cadastra.remove();
            break;
        case 5:
            console.log("Sair");
            break;
        default:
            break;
    }
}
console.log("Acabou!");
//todo : criar o "remover" e "atualizar"
// requisicao de exame (Pesquisa)
