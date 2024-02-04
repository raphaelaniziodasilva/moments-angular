// dentro dessa interface Moment deve conter todas as informações que tem na entidade moment do banco de dados
export interface Moment {
    id?: number;
    title: string;
    description: string;
    image: string;
    created_a?: string;
    updated_a?: string;
    comments?: [{ text: string, username: string}]
}

/* precisamos criar o service, crie a pasta service e o arquivo moment
    utilize o terminal para criar a pasta de service e o aquivo moment pre montado:
        ng generate service services/moment
*/