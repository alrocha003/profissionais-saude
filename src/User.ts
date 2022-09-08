export default class User {
    constructor(
      public nome: string,
      public sobrenome: string,
      public email: string,
      public celular: number,
      public dataNascimento: number
      
    ) {
      this.nome = nome,
      this.sobrenome = sobrenome,
      this.email = email,
      this.celular = celular
      this.dataNascimento = dataNascimento
    }
  
     exibeDados(): string {
      return this.nome + this.sobrenome + this.email + this.celular;
    }

  }