import CategoriaDespesa from "./CategoriaDespesa"

export default interface Despesa {
    categorie: CategoriaDespesa;
    createdAt?: string;
    description: string;
    id?: number;
    value: number;
}