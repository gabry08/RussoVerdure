import { Component } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-verdure';
  mostra = false;


constructor(private http: HttpClientModule) {

 }

 onClick(nome: HTMLInputElement, descrizione: HTMLInputElement, prezzo : HTMLInputElement ) : boolean
  {
    console.log(nome.value, descrizione.value, prezzo.value);
    if (this.mostra == false){
        this.mostra = true;

    }
    return false;

  }

}
