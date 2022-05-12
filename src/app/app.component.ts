import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title:string = 'Contador App';
  public counter:number = 10;
  public base:number = 5;
  sumar(numero:number){
    this.counter+=numero;
  }
  restar(numero:number){
    this.counter-=numero;
  }
}
