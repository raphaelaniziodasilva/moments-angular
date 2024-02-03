import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-moment-form',
  templateUrl: './moment-form.component.html',
  styleUrls: ['./moment-form.component.css']
})
export class MomentFormComponent {
  // criando a propriedade btnText que e o botão, com a propriedade criada adicione no componente pai aonde está sendo usada new-moment.component.html

  @Input() btnText!: string
}
