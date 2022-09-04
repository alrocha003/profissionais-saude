"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const prompt_sync_1 = __importDefault(require("prompt-sync"));
console.debug("\nBem vindo ao projeto - 🅿🆁🅾🅵🅸🆂🅸🅾🅽🅰🅸🆂 🅳🅰 🆂🅰ú🅳🅴\n");
const prompt = (0, prompt_sync_1.default)();
console.debug("Opções\n" +
    " 1 - Bla bla bla\n" +
    " 2 - Bla bla bla\n" +
    " 3 - Bla bla bla\n");
let option = parseInt(prompt("\nInforme a opção desejada: "));
console.debug(option);
