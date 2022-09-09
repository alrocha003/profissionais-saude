import prompt from "prompt-sync";


console.debug("\nBem vindo ao projeto - 🅿🆁🅾🅵🅸🆂🅸🅾🅽🅰🅸🆂 🅳🅰 🆂🅰ú🅳🅴\n");

let input = prompt();
let option: number = 0;

while (option != 4) {
  console.log('+========= Lista Funcionalidades =========+');
  console.log('|1. Cadastrar Paciente          |');
  console.log('|2. Cadastrar Médico            |');
  console.log('|3. Listar Paciente/Médico      |');
  console.log('|4. Sair                        |');
  console.log('+================================+')

  option = +input("Escolha uma funcionalidade")

  switch (option) {
    case 1:
      console.log("Insira o nome do Paciente: ");
      break;
    case 2:
      console.log("Insira o nome do Médico");
      break;
    case 3:
      console.log("Lista Pacientes/Médicos");
      break;
    case 4:
      console.log("Sair");
        break;
    default:
      break;
  }
}

console.log('Acabou!');
