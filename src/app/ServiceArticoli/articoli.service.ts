import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Articolo } from '../model/articolo';

@Injectable({
  providedIn: 'root'
})

export class ArticoliService {

  public elencoArticoli: Articolo[] = [];
  private APIURL = '/assets/articoli.json';

  constructor(private http: HttpClient) {
  }
  getArticoliAll(): Articolo[] {
    return this.elencoArticoli;
  }

  getArticoliJson(): Observable<Articolo[]> {
    return this.http.get<Articolo[]>(this.APIURL);
  }

  addArticolo(articolo: Articolo) {
    this.elencoArticoli.push(articolo);
    console.log(this.elencoArticoli);
  }
}
