"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class User {
    constructor(nomeSobrenome, email, celular, dataNascimento) {
        this.nomeSobrenome = nomeSobrenome;
        this.email = email;
        this.celular = celular;
        this.dataNascimento = dataNascimento;
        this.nomeSobrenome = nomeSobrenome,
            this.email = email,
            this.celular = celular;
        this.dataNascimento = dataNascimento;
    }
    exibeDados() {
        return this.nomeSobrenome + ' ' + this.email + ' ' + this.celular;
    }
}
exports.default = User;
