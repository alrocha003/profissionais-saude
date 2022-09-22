"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const User_1 = __importDefault(require("./User"));
class Patient extends User_1.default {
    constructor(nomeSobrenome, email, celular, dataNascimento, peso, altura) {
        super(nomeSobrenome, email, celular, dataNascimento);
        this.nomeSobrenome = nomeSobrenome;
        this.email = email;
        this.celular = celular;
        this.dataNascimento = dataNascimento;
        this.peso = peso;
        this.altura = altura;
        this.exibeDados = () => `Nome: ${this.nomeSobrenome} - E-mail: ${this.email} - Celular: 
    ${this.celular} - Data Nascimento: ${this.dataNascimento} - Peso: ${this.peso} - Altura: ${this.altura}`;
        this.peso = peso;
        this.altura = altura;
    }
}
exports.default = Patient;
