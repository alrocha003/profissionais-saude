import promptSync from 'prompt-sync';

console.debug("\nBem vindo ao projeto - 🅿🆁🅾🅵🅸🆂🅸🅾🅽🅰🅸🆂 🅳🅰 🆂🅰ú🅳🅴\n");

const prompt = promptSync();

console.debug("Opções\n" +
    " 1 - Bla bla bla\n" +
    " 2 - Bla bla bla\n" +
    " 3 - Bla bla bla\n");

let option: Number = parseInt(prompt("\nInforme a opção desejada: "));

console.debug(option);