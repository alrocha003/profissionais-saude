import User from "./User";

export default class Patient extends User {
  constructor(
    public nome: string,
    public sobrenome: string,
    public email: string,
    public celular: number,
    public dataNascimento: number,
    public peso: number,
    public altura: number
  ) {
    super(nome, sobrenome, email, celular, dataNascimento);
    this.peso = peso;
    this.altura = altura;
  }
}


