import { Injectable } from "@angular/core";
import { ComponentStore } from "@ngrx/component-store";
import { Observable } from "rxjs";
import { Articolo } from "./model/articolo";

export interface Articoli {
  articoli: Articolo[];
}

@Injectable()
export class ArticoliStore extends ComponentStore<Articoli> {

  constructor() {
    super({ articoli: [] });
  }

  readonly addArticolo = this.updater((state, articolo: Articolo) => ({
    articoli: [...state.articoli, articolo]
  }))

  readonly articoli$: Observable<Articolo[]> = this.select(state => state.articoli)

}
