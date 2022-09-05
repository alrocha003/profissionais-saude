"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prompt_sync_1 = __importDefault(require("prompt-sync"));
console.debug("\nBem vindo ao projeto - 🅿🆁🅾🅵🅸🆂🅸🅾🅽🅰🅸🆂 🅳🅰 🆂🅰ú🅳🅴\n");
const input = (0, prompt_sync_1.default)();
console.debug("------------Funcionalidades------------\n" +
    " 1 - Cadastrar Paciente\n" +
    " 2 - Remover Paciente\n" +
    " 3 - Listar Pacientes");
let option = parseInt(input("\nInforme a opção desejada: "));
console.debug(option);
