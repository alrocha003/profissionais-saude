import User from "./User";

export default class Doctor extends User {
    constructor(
        public nome: string,
        public sobrenome: string,
        public email: string,
        public celular: number,
        public dataNascimento: number,
        public crm: number,
        public especialidade: string
      ) {
        super(nome, sobrenome, email, celular, dataNascimento);
        this.crm = crm;
        this.especialidade = especialidade;
      }
}