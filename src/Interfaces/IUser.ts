interface IUser {
    nomeSobrenome: string;
    email?: string;
    celular?: string;

    exibeDados(): string;

}