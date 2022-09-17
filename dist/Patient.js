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
        this.peso = peso;
        this.altura = altura;
    }
    exibeDados() {
        return this.nomeSobrenome + ' ' + this.email + ' ' + this.celular + ' ' + this.dataNascimento + ' ' + this.peso + ' ' + this.altura;
    }
}
exports.default = Patient;
