import { Component } from '@angular/core';
import { Articolo } from './model/articolo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  title = 'GitPrAnguarMyFirst';
  rootArticolo;
  elencoArticoli: any[] = [];

  constructor() {
    this.rootArticolo = {
      titolo: "Creare componenti Angular 2",
			autore: "Mario Rossi",
      testo: "Creare componenti con Angular 2 è molto semplice.",
      numApprezzamenti: 0
    }
  }

  grazie($event: { numApprezzamenti: string; }) {
    alert("grazie " + $event.numApprezzamenti);
  }

  addArt(articolo: any) {
    this.elencoArticoli.push(articolo);
    console.log(this.elencoArticoli);
  }

}
