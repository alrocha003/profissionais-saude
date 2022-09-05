import prompt from 'prompt-sync';

console.debug("\nBem vindo ao projeto - 🅿🆁🅾🅵🅸🆂🅸🅾🅽🅰🅸🆂 🅳🅰 🆂🅰ú🅳🅴\n");

const input = prompt();

console.debug("------------Funcionalidades------------\n" +
    " 1 - Cadastrar Paciente\n" +
    " 2 - Remover Paciente\n" +
    " 3 - Listar Pacientes");

let option: Number = parseInt(input("\nInforme a opção desejada: "));

console.debug(option);