import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component';
import { AboutComponent } from './components/pages/about/about.component';
import { NewMomentComponent } from './components/pages/new-moment/new-moment.component';

// Vamos mapear determinados caminhos de URL para componentes específicos
const routes: Routes = [
  // definindo o caminho da URL que a rota deve corresponder e permitindo que os componentes associados às rotas sejam exibidos em locais específicos do seu aplicativo conforme a navegação ocorre
  {path: '', component: HomeComponent}, // pagina home
  {path: 'about', component: AboutComponent}, // pagina about
  {path: 'moment/new', component: NewMomentComponent} // página de componentes
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
