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
    super(nomeSobrenome, email, celular, dataNascimento);
    this.crm = crm;
    this.especialidade = especialidade;
  }

  exibeDados = (): string => `Nome: ${this.nomeSobrenome} - E-mail: ${this.email} - Celular: ${this.celular} - Data Nascimento: ${this.dataNascimento} - CRM: ${this.crm} - Especialidade: ${this.especialidade}`;
}