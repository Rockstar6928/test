import { NgModule} from "@angular/core";
import {HeroeComponent} from "./heroe/heroe.component";
import {ListadoComponent} from "./listado/listado.component";
import {CommonModule} from "@angular/common";

@NgModule({
  declarations: [ //nos dice que cosas contiene este modulo, components, pipes,etc
    HeroeComponent,
    ListadoComponent
  ],
  //que cosas quiero que sean visibles al exterior
  exports: [
    ListadoComponent
  ],
  //aquí van unicamente modulos
  imports :[
  CommonModule //se necesita para las directivas ngFor, ngIf, etc
  ]
})
export class HeroesModule {

}
