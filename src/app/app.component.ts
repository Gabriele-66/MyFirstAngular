import { Component, OnInit, SimpleChanges } from '@angular/core';
import { Articolo } from './model/articolo';
import { ArticoliStore } from './articoli.store'
import { ComponentStore } from '@ngrx/component-store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ ArticoliStore, ComponentStore]
})

export class AppComponent implements OnInit {

  elencoArticoli: Articolo[] = [];

  articoli$ = this.articoliStore.articoli$;

  obs = this.articoliStore.articoli$.subscribe(arg => console.log(arg));


  constructor(private readonly articoliStore: ArticoliStore) { }

  ngOnInit(): void {

  }



}
