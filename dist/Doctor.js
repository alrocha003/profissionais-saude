"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const User_1 = __importDefault(require("./User"));
class Doctor extends User_1.default {
    constructor(nomeSobrenome, email, celular, dataNascimento, crm, especialidade) {
        super(nomeSobrenome, email, celular, dataNascimento);
        this.nomeSobrenome = nomeSobrenome;
        this.email = email;
        this.celular = celular;
        this.dataNascimento = dataNascimento;
        this.crm = crm;
        this.especialidade = especialidade;
        this.crm = crm;
        this.especialidade = especialidade;
    }
    exibeDados() {
        return this.nomeSobrenome + ' ' + this.email + ' ' + this.celular + ' ' + this.dataNascimento + ' ' + this.crm + ' ' + this.especialidade;
    }
}
exports.default = Doctor;
