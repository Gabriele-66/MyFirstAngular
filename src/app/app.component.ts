import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'GitPrAnguarMyFirst';
  rootArticolo;
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
}
