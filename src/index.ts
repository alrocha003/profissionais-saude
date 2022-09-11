import prompt from "prompt-sync";
import Cadastra from "./commons/function-cadastro";


console.debug("\nBem vindo ao projeto - 🅿🆁🅾🅵🅸🆂🅸🅾🅽🅰🅸🆂 🅳🅰 🆂🅰ú🅳🅴\n");

let input = prompt();
let option: number = 0;
let cadastra = new Cadastra()


while (option != 4) {
  console.log('+========= Lista Funcionalidades =========+');
  console.log('|1. Cadastrar Paciente          |');
  console.log('|2. Cadastrar Médico            |');
  console.log('|3. Listar Paciente/Médico      |');
  console.log('|4. Sair                        |');
  console.log('+================================+')

  option = +input("Escolha uma funcionalidade : --> ")
  
  switch (option) {
    case 1:
      cadastra.cadastroPaciente()
      break;
    case 2:
      cadastra.cadastroMedico()
      break;
    case 3:
      cadastra.listar()
      break;
    case 4:
      console.log("Sair");
        break;
    default:
      break;
  }
}

console.log('Acabou!');

//todo : criar o "remover" e "atualizar" 
// requisicao de exame (Pesquisa)
