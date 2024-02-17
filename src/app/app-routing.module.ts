import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component';
import { AboutComponent } from './components/pages/about/about.component';
import { NewMomentComponent } from './components/pages/new-moment/new-moment.component';
import { MomentComponent } from './components/pages/moment/moment.component';
import { EditMomentComponent } from './components/pages/edit-moment/edit-moment.component';

// Vamos mapear determinados caminhos de URL para componentes específicos
const routes: Routes = [
  // definindo o caminho da URL que a rota deve corresponder e permitindo que os componentes associados às rotas sejam exibidos em locais específicos do seu aplicativo conforme a navegação ocorre

  // página home, página principal aonde vai exibir os momentos
  {path: '', component: HomeComponent},

  // página about, página sobre
  {path: 'about', component: AboutComponent}, 

  // página new-moment, página aonde vai ser criado os momentos
  {path: 'moment/new', component: NewMomentComponent},

  // página edit-moment, página aonde vai ser editado o momento
  {path: 'moments/edit/:id', component: EditMomentComponent},

  // página moment, página aonde vai pegar um único momento individual pelo id que esta linkado em detalhe
  {path: 'moments/:id', component: MomentComponent}, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
