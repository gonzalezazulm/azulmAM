import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardDetalleComponent } from './card-detalle/card-detalle.component';
import { MaterialModule } from '../material/material.module';
import { NavbarComponent } from './navbar/navbar.component';
import { CarouselComponent } from './carousel/carousel.component';
import { FooterComponent } from './footer/footer.component';



@NgModule({
  declarations: [
    CardDetalleComponent,
    NavbarComponent,
    CarouselComponent,
    FooterComponent
  ],
  exports:[
    CardDetalleComponent,
    NavbarComponent,
    CarouselComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ]
})
export class ComponentsModule { }
