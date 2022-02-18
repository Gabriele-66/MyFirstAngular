import { Component, OnInit } from '@angular/core';
import { Articolo } from './model/articolo';
import { ArticoliService } from './ServiceArticoli/articoli.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ArticoliService]
})

export class AppComponent implements OnInit{

  title = 'GitPrAnguarMyFirst';
  rootArticolo;
  elencoArticoli: Articolo[] = [];

  constructor(private articoliService: ArticoliService) {

    this.elencoArticoli = articoliService.getArticoliAll();

    this.rootArticolo = { //dati che passo ad articolo
      titolo: "Creare componenti Angular 2",
			autore: "Mario Rossi",
      testo: "Creare componenti con Angular 2 è molto semplice.",
      numApprezzamenti: 0
    }
  }

  grazie($event: { numApprezzamenti: string; }) { //evento ricevuto da articolo
    alert("grazie " + $event.numApprezzamenti);
  }

  addArt(articolo: any) {
    this.articoliService.addArticolo(articolo);
  }

  ngOnInit(): void {
    this.articoliService.getArticoliJson().subscribe(data => this.elencoArticoli = data);
    console.log(this.elencoArticoli)
    console.log('caricato file dal json')
  }
}
