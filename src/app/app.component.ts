import { Component, OnInit } from '@angular/core';
import { Articolo } from './model/articolo';
import { ArticoliService } from './ServiceArticoli/articoli.service';
import { ArticoliStore } from './articoli.store'
import { ComponentStore } from '@ngrx/component-store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ArticoliService, ArticoliStore, ComponentStore]
})

export class AppComponent implements OnInit{

  title = 'AnguarMyFirst';
  rootArticolo;
  elencoArticoli: Articolo[] = [];

  articoli$ = this.articoliStore.articoli$;

  constructor(private articoliService: ArticoliService, private readonly articoliStore: ArticoliStore) {

    this.rootArticolo = { //dati che passo ad articolo
      titolo: "Creare componenti Angular 2",
			autore: "Mario Rossi",
      testo: "Creare componenti con Angular 2 è molto semplice."
    }
  }

  addSt(articolo: Articolo) {
    this.articoliStore.addArticolo(articolo)
  }

  addArt(articolo: any) {
    this.articoliService.addArticolo(articolo);
    this.elencoArticoli = this.articoliService.getArticoliAll();
  }

  ngOnInit(): void {
    this.articoliService.getArticoliJson().subscribe(data => this.articoliService.elencoArticoli = data);
    console.log(this.elencoArticoli)//in questo punto array vuoto
    console.log('caricato')
  }
}
