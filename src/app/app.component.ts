import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'GitPrAnguarMyFirst';
  myArticolo;
  constructor() {
    this.myArticolo = {
      titolo: "Creare componenti Angular 2",
			autore: "Mario Rossi",
			testo: "Creare componenti con Angular 2 è molto semplice."
    }
  }
}
