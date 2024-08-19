import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './page/home/home.component';
import { ContactoComponent } from './page/contacto/contacto.component';
import { QuienesSomosComponent } from './page/quienes-somos/quienes-somos.component';

const routes: Routes = [
  {
    path:'home',
    component: HomeComponent,
  },
  {
    path: 'contacto',
    component:ContactoComponent, 
  },
  {
    path:'quienes_somos',
    component: QuienesSomosComponent,  
  },
  {
    path:''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
