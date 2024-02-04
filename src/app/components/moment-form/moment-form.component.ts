import { Component, Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-moment-form',
  templateUrl: './moment-form.component.html',
  styleUrls: ['./moment-form.component.css']
})
export class MomentFormComponent {
  // criando a propriedade btnText que e o botão, com a propriedade criada adicione no componente pai aonde está sendo usada new-moment.component.html
  @Input() btnText!: string;

  momentForm!: FormGroup;

  constructor() {

  }

  // para fazer a validação do title do formuário precisamos criar o title, primeiro precisamos inicializar o formulário usando ngOnInit poque agora vamos inicializar as coisas do angular
  ngOnInit(): void {

    // vamos inicializar o momentForm poque la em cima só esta sendo declarado aqui vamos inicializa-lo
    this.momentForm = new FormGroup({
      // declarando todos os campos que vai ter no formulário, FormControl = esta controlando o input pode ser qualquer um que esta aqui
      id: new FormControl(''),

      // vamos declarar os validators
      title: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
      image: new FormControl(''),
    });
  }

  // pegando o atributo title do momentForm inicilaizado para fazer a validação do campo
  get title() {
    return this.momentForm.get('title')!;
  }

  // pegando o atributo description do momentForm inicilaizado para fazer a validação do campo
  get description() {
    return this.momentForm.get('description')!;
  }

  submit() {
    // se o momentForm for invalido ele vai dar um return ele não terminar o submit
    if(this.momentForm.invalid) {
      return;
    }
    console.log('Enviou formulário');
  }
}
