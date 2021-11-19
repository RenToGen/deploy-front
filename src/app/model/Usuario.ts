import {Produto} from "./Produto"

export class Usuario {
    public id: number
    public nome: string
    public usuario: string
    public tipoCadastro: string
    public senha: string
    public foto: string
    public telefone: string
    public produto: Produto[]
}