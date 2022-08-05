import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { ContactoComponent } from './contacto/contacto.component';
import { ComponentsModule } from '../components/components.module';
import { ServiciosComponent } from './servicios/servicios.component';
import { TiendaComponent } from './tienda/tienda.component';

@NgModule({
  declarations: [
    HomeComponent,
    ContactoComponent,
    ServiciosComponent,
    TiendaComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule,
  ]
})
export class PagesModule { }
