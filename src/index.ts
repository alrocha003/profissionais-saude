import prompt from "prompt-sync";


console.debug("\nBem vindo ao projeto - 🅿🆁🅾🅵🅸🆂🅸🅾🅽🅰🅸🆂 🅳🅰 🆂🅰ú🅳🅴\n");

let input = prompt();
let option: number = 0;

while (option != 9) {
  console.log(
    "------------Funcionalidades------------\n" +
      " 1 - Cadastrar Paciente\n" +
      " 2 - Remover Paciente\n" +
      " 3 - Listar Pacientes"
  );

  let option: Number = parseInt(input("\nInforme a opção desejada: "));

  switch (option) {
    case 1:
      console.log(input("\nInsira o nome: "));
      break;
    case 2:
      console.log("digite o nome do usuário");
      break;
    case 3:
      console.log("lista dos pacientes");
      break;
    default:
      break;
  }
}

console.debug(option);
