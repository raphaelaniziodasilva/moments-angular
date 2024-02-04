// dentro dessa interface Moment deve conter todas as informações que tem na entidade moment do banco de dados
export interface Response<T> {
    message?: string;
    data: T;
}