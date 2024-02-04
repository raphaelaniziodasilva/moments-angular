// dentro dessa interface Moment deve conter todas as informações que tem na entidade moment do banco de dados
export interface Comment {
    id?: number;
    text: string;
    username: string;
    momentId: number;
    created_a?: string;
    updated_a?: string;
}

/* precisamos criar dentro do service o arquivo commet, crie o arquivo comment
    utilize o terminal para criar o aquivo moment:
        ng generate service services/moment
*/