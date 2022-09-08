import CategoriaDespesa from "./CategoriaDespesa"

export default interface Despesa {
    categoria: CategoriaDespesa;
    data: string;
    descricao: string;
    id: number;
    valor: number;
}