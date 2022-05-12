import {Component} from "@angular/core";

@Component({
  selector: 'app-heroe',
  templateUrl: 'heroe.component.html',
  styleUrls: ['heroe.component.css']
})
export class HeroeComponent {
  public listaHeroes:string[]=['Hulk','IronMan','BlackWidow'];
  public heroeBorrado:string;

  constructor() {
    this.heroeBorrado='';
  }
  borrarHeroe(){
    // @ts-ignore
    this.heroeBorrado= this.listaHeroes.shift();
  }


}
