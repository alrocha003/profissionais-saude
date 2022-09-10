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

  option = +input("Escolha uma funcionalidade : --> ")

  switch (option) {
    case 1:
      const nomeEsobrenomePaciente = input('Digite o Nome e Sobrenome do Paciente : ')
      const emailPaciente = input('Digite o Email: ')
      const celularPaciente = input('Digite o celular: ')
      const dataNascimentoPaciente = input('Digite a Data de Nascimento: ')
      const pesoPaciente = input('Digite o Peso: ')
      const alturaPaciente = input('Digite a Altura: ')
      break;
    case 2:
      const nomeEsobrenomeMedico = input('Digite o Nome e Sobrenome do Médico : ')
      const emailMedico = input('Digite o Email: ')
      const celularMedico = input('Digite o celular: ')
      const dataNascimentoMedico = input('Digite a Data de Nascimento: ')
      const crm = input('Digite o CRM: ')
      const especialidade = input('Digite a Especialidade: ')
      break;
    case 3:
      console.table('Lista do Paciente e Médico');
      break;
    case 4:
      console.log("Sair");
        break;
    default:
      break;
  }
}

console.log('Acabou!');
