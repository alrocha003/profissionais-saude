import User from "./User";

export default class Patient extends User implements IUser {
  constructor(
    public nomeSobrenome: string,
    public email: string,
    public celular: string,
    public dataNascimento: string,
    public peso: string,
    public altura: string
  ) {
    super(nomeSobrenome, email, celular, dataNascimento);
    this.peso = peso;
    this.altura = altura;
  }

  exibeDados(): string {
    return this.nomeSobrenome  + ' ' + this.email + ' ' + this.celular + ' ' + this.dataNascimento + ' ' + this.peso + ' '+ this.altura;
  }

}


