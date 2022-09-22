"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });

exports.Cadastra = void 0;
const prompt_sync_1 = __importDefault(require("prompt-sync"));
const Doctor_1 = __importDefault(require("../Doctor"));
const Patient_1 = __importDefault(require("../Patient"));
class Cadastra {
    constructor() {
        this.input = (0, prompt_sync_1.default)();
        this.option = 0;
        this.listaUsuarios = [];
        this.listar = () => this.listaUsuarios.map(user => console.debug(user.exibeDados()));
    }
    cadastroPaciente() {
        let nomeEsobrenomeMedico = this.input('Digite o Nome e Sobrenome do Médico : ');
        let emailMedico = this.input('Digite o Email: ');
        let celularMedico = this.input('Digite o celular: ');
        let dataNascimentoMedico = this.input('Digite a Data de Nascimento: ');
        let crm = this.input('Digite o CRM: ');
        let especialidade = this.input('Digite a Especialidade: ');
        let novoMedico = new Doctor_1.default(nomeEsobrenomeMedico, emailMedico, celularMedico, dataNascimentoMedico, crm, especialidade);
        this.listaUsuarios.push(novoMedico);
    }
    cadastroMedico() {
        let nomeEsobrenomePaciente = this.input('Digite o Nome e Sobrenome do Paciente : ');
        let emailPaciente = this.input('Digite o Email: ');
        let celularPaciente = this.input('Digite o celular: ');
        let dataNascimentoPaciente = this.input('Digite a Data de Nascimento: ');
        let pesoPaciente = this.input('Digite o Peso: ');
        let alturaPaciente = this.input('Digite a Altura: ');
        let novoPaciente = new Patient_1.default(nomeEsobrenomePaciente, emailPaciente, celularPaciente, dataNascimentoPaciente, pesoPaciente, alturaPaciente);
        this.listaUsuarios.push(novoPaciente);
    }

}
    remove() {
        let nomeSobrenome = this.input('Digite o nome: \t');
        let user = this.listaUsuarios.find(u => u.nomeSobrenome == nomeSobrenome);
        if (user === undefined) {
            console.log(`Esse ${nomeSobrenome} não existe no banco de dados!`);
        }
        else {
            this.listaUsuarios = this.listaUsuarios.filter(u => u.nomeSobrenome !== nomeSobrenome);
            console.log('Esse cadastro foi removido');
        }
    }
}
exports.Cadastra = Cadastra;
// export class Remover {
//   input = prompt();
//   option: number = 0;
//   listaUsuarios: Array<IUser> = [];
//   remove() {
//     let nomeSobrenome = this.input('Digite o nome')
//     let index = this.listaUsuarios.includes({ nomeSobrenome })
//     let indexof = this.listaUsuarios.indexOf({ nomeSobrenome })
//     if (!index) {
//       console.log(`Esse ${nomeSobrenome} não existe no banco de dados!`)
//     } else if (index) {
//       this.listaUsuarios.splice(indexof, 1)
//       console.log('Esse cadastro foi removido')
//     }
//   }
// }
