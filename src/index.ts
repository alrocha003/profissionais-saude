import prompt from "prompt-sync";
import Doctor from "./Doctor";
import Patient from "./Patient";


console.debug("\nBem vindo ao projeto - 🅿🆁🅾🅵🅸🆂🅸🅾🅽🅰🅸🆂 🅳🅰 🆂🅰ú🅳🅴\n");

let input = prompt();
let option: number = 0;
let listaUsuarios: Array<IUser> = [];

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
      let nomeEsobrenomePaciente = input('Digite o Nome e Sobrenome do Paciente : ')
      let emailPaciente = input('Digite o Email: ')
      let celularPaciente = input('Digite o celular: ')
      let dataNascimentoPaciente = input('Digite a Data de Nascimento: ')
      let pesoPaciente = input('Digite o Peso: ')
      let alturaPaciente = input('Digite a Altura: ')
      let novoPaciente = new Patient(nomeEsobrenomePaciente,
        emailPaciente,
        celularPaciente,
        dataNascimentoPaciente,
        pesoPaciente,
        alturaPaciente)
        listaUsuarios.push(novoPaciente)
      break;
    case 2:
      let nomeEsobrenomeMedico = input('Digite o Nome e Sobrenome do Médico : ')
      let emailMedico = input('Digite o Email: ')
      let celularMedico = input('Digite o celular: ')
      let dataNascimentoMedico = input('Digite a Data de Nascimento: ')
      let crm = input('Digite o CRM: ')
      let especialidade = input('Digite a Especialidade: ')
      let novoMedico = new Doctor(nomeEsobrenomeMedico,
        emailMedico,
        celularMedico,
        dataNascimentoMedico,
        crm,
        especialidade,)
        listaUsuarios.push(novoMedico)
      break;
    case 3:
      for(let i = 0; i< listaUsuarios.length; i++ ){
       console.table(listaUsuarios[i].exibeDados())
        
      }
      break;
    case 4:
      console.log("Sair");
        break;
    default:
      break;
  }
}

console.log('Acabou!');
