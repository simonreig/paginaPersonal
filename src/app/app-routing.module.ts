import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { PerfilComponent } from './pages/perfil/perfil.component';
import { CvComponent } from './pages/cv/cv.component';
import { HabilidadesComponent } from './pages/habilidades/habilidades.component';
import { ContactoComponent } from './pages/contacto/contacto.component';

const routes: Routes = [

  {path: 'home', component: HomeComponent},
  {path: 'perfil', component: PerfilComponent},
  {path: 'cv', component: CvComponent},
  {path: 'habilidades', component: HabilidadesComponent},
  {path: 'contacto', component: ContactoComponent},
  {path:'fb', redirectTo:'www.google.com'},

  {path: '**', pathMatch: 'full', redirectTo: '/home'}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
