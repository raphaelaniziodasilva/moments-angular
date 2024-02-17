import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Moment } from 'src/app/interface/Moment';

@Component({
  selector: 'app-moment-form',
  templateUrl: './moment-form.component.html',
  styleUrls: ['./moment-form.component.css']
})
export class MomentFormComponent {
  // criando a propriedade btnText que e o botão, com a propriedade criada adicione no componente pai aonde está sendo usada new-moment.component.html
  @Input() btnText!: string;
  @Input() momentData: Moment | null = null;

  // @Output() = permite que o componente pai reaja a eventos gerados pelo componente filho, quando um evento onSubmit é acionado no componente filho, ele pode ser capturado e tratado pelo componente pai.
  @Output() onSubmit = new EventEmitter<Moment>();

  momentForm!: FormGroup; // nome do formulário

  constructor() {}

  // para fazer a validação do title do formuário precisamos criar o title, primeiro precisamos inicializar o formulário usando ngOnInit poque agora vamos inicializar as coisas do angular
  ngOnInit(): void {

    // vamos inicializar o momentForm poque la em cima só esta sendo declarado e aqui vamos inicializa-lo
    this.momentForm = new FormGroup({
      // declarando todos os campos que vai ter no formulário, FormControl = esta controlando o input pode ser qualquer um que esta aqui

      // quando for editar do momento precisamos fazer uma verificação, se o moment ja foi criado vai me trazer os dados desse moment no formúlario da página de edit!
      // this.momentData ? this.momentData.id = verificando se o id existe
      id: new FormControl(this.momentData ? this.momentData.id : ''), // id para fazer a edição e exclusão 

      // vamos declarar os validators
      // this.momentData ? this.momentData.title = verificando se o title existe
      title: new FormControl(this.momentData ? this.momentData.title : '', Validators.required),

      // this.momentData ? this.momentData.description = verificando se a descrição existe
      description: new FormControl(this.momentData ? this.momentData.description : '', Validators.required),

      image: new FormControl(''),
    });

    // precisamos pegar os atributos que queremos com o metodo get
  }

  // pegando o atributo title do momentForm inicilaizado para fazer a validação do campo
  get title() {
    return this.momentForm.get('title')!;
  }

  // pegando o atributo description do momentForm inicilaizado para fazer a validação do campo
  get description() {
    return this.momentForm.get('description')!;
  }

  // vai ser responsável por jogar a imagem no formulário
  onFileSelected(event: any) {
    // pegando o arquivo do input de imagem
    const file: File = event.target.files[0];
    // atualizando o valor do campo image no formulário, com os dados contidos na variável file
    this.momentForm.patchValue({image: file})
  }

  submit() {
    // se o momentForm for invalido ele vai dar um return ele não terminar o submit
    if(this.momentForm.invalid) {
      return;
    }
    console.log(this.momentForm.value);

    // com o formulário criado e configurado precisamos enviar as informações do formulário para o componente pai
    // vamos emitir um evento para o componente pai no arquivo new-moment.component.html

    // enviando os dados do formlário para o componente pai no arquivo new-moment.component.ts, para isso precisamos utilizar o decorator @Output() onSubmit 
    this.onSubmit.emit(this.momentForm.value);
  }
}