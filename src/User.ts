export default class User {
    constructor(
      public nomeSobrenome: string,
      public email: string,
      public celular: string,
      public dataNascimento: string
      
    ) {
      this.nomeSobrenome = nomeSobrenome,
      this.email = email,
      this.celular = celular
      this.dataNascimento = dataNascimento
    }
  
     exibeDados(): string {
      return this.nomeSobrenome  + ' ' + this.email + ' ' + this.celular;
    }

  }