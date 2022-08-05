import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { HomeComponent } from './pages/home/home.component';
import { ServiciosComponent } from './pages/servicios/servicios.component';
import { TiendaComponent } from './pages/tienda/tienda.component';
const routes: Routes = [
  {path:'home', component:HomeComponent},
  {path:'', component:HomeComponent},
  {path:'contacto', component:ContactoComponent},
  {path:'servicios', component:ServiciosComponent},
  {path:'tienda', component: TiendaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
