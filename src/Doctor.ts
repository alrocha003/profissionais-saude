import User from "./User";

export default class Doctor extends User implements IUser {
    constructor(
        public nomeSobrenome: string,
        public email: string,
        public celular: string,
        public dataNascimento: string,
        public crm: string,
        public especialidade: string
      ) {
        super(nomeSobrenome,email, celular, dataNascimento);
        this.crm = crm;
        this.especialidade = especialidade;
      }

      exibeDados(): string {
        return this.nomeSobrenome  + ' ' + this.email + ' ' + this.celular + ' ' + this.dataNascimento + ' ' + this.crm + ' '+ this.especialidade;
      }
}