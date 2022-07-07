import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardDetalleComponent } from './card-detalle/card-detalle.component';
import { MaterialModule } from '../material/material.module';
import { NavbarComponent } from './navbar/navbar.component';
import { CarouselComponent } from './carousel/carousel.component';



@NgModule({
  declarations: [
    CardDetalleComponent,
    NavbarComponent,
    CarouselComponent
  ],
  exports:[
    CardDetalleComponent,
    NavbarComponent,
    CarouselComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ]
})
export class ComponentsModule { }
