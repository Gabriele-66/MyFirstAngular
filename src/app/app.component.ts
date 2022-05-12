import { Component, OnInit } from '@angular/core';
import { Articolo } from './model/articolo';
import { ArticoliStore } from './articoli.store'
import { ComponentStore } from '@ngrx/component-store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ ArticoliStore, ComponentStore]
})

export class AppComponent implements OnInit{

  elencoArticoli: Articolo[] = [];

  articoli$ = this.articoliStore.articoli$;

  constructor(private readonly articoliStore: ArticoliStore) {}

  ngOnInit(): void {

  }
  
  addSt(articolo: Articolo) {
    this.articoliStore.addArticolo(articolo)
  }
}
