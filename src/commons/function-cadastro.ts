import prompt from "prompt-sync";
import Doctor from "../Doctor";
import Patient from "../Patient";



export class Cadastra {
  input = prompt();
  option: number = 0;
  listaUsuarios: Array<IUser> = [];

  cadastroPaciente() {
     let nomeEsobrenomeMedico = this.input('Digite o Nome e Sobrenome do Médico : ');
     let emailMedico = this.input('Digite o Email: ');
     let celularMedico = this.input('Digite o celular: ');
     let dataNascimentoMedico = this.input('Digite a Data de Nascimento: ');
     let crm = this.input('Digite o CRM: ');
     let especialidade = this.input('Digite a Especialidade: ');
     let novoMedico = new Doctor(nomeEsobrenomeMedico,
       emailMedico,
       celularMedico,
       dataNascimentoMedico,
       crm,
       especialidade);
     this.listaUsuarios.push(novoMedico);
   }

   cadastroMedico() {
    let nomeEsobrenomePaciente = this.input('Digite o Nome e Sobrenome do Paciente : ');
    let emailPaciente = this.input('Digite o Email: ');
    let celularPaciente = this.input('Digite o celular: ');
    let dataNascimentoPaciente = this.input('Digite a Data de Nascimento: ');
    let pesoPaciente = this.input('Digite o Peso: ');
    let alturaPaciente = this.input('Digite a Altura: ');
    let novoPaciente = new Patient(nomeEsobrenomePaciente,
      emailPaciente,
      celularPaciente,
      dataNascimentoPaciente,
      pesoPaciente,
      alturaPaciente);
    this.listaUsuarios.push(novoPaciente);
  }

  listar = () => this.listaUsuarios.map(user => console.debug(user.exibeDados()));


}

export class Remover {
  input = prompt();
  option: number = 0;
  listaUsuarios: Array<IUser> = [];
  remove() {
    let nomeSobrenome = this.input('Digite o nome')
    let index = this.listaUsuarios.includes({nomeSobrenome})
    let indexof = this.listaUsuarios.indexOf({nomeSobrenome})
    if(!index){
      console.log(`Esse ${nomeSobrenome} não existe no banco de dados!`)
    } else if(index){
      this.listaUsuarios.splice(indexof,1)
      console.log('Esse cadastro foi removido')
    }
}}