import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Articolo } from '../model/articolo';

@Injectable({
  providedIn: 'root'
})

export class ArticoliService {

  private elencoArticoli: Articolo[] = [];
  private APIURL = '/assets/articoli.json';

  constructor(private http: HttpClient) {
    /*
    this.elencoArticoli = [{
      titolo: "Creare componenti Angular 2",
      autore: "Mario Rossi",
      testo: "Creare componenti con Angular 2 è molto semplice.",
      numApprezzamenti: 0
    },
    {
      titolo: "Creare servizi Angular 2",
      autore: "Roberto Bianchi",
      testo: "Anche creare servizi con Angular 2 è molto semplice.",
      numApprezzamenti: 0
    }];
    */
  }
  getArticoliAll(): Articolo[] {
    //console.log(this.elencoArticoli);
    return this.elencoArticoli;
  }

  getArticoliJson(): Observable<Articolo[]> {
    return this.http.get<Articolo[]>(this.APIURL);
  }
/*
getArticoli1(){
    return this.http.get(this.APIURL).subscribe(<Articolo[]>data => this.elencoArticoli= data);
  }

  getArticoli1(){
    return this.http.get(this.APIURL)
      .toPromise()
      .then(Response)
      .catch()
    //  .subscribe(data => console.log(data));
  }


*/

  addArticolo(articolo: Articolo) {
    this.elencoArticoli.push(articolo)
  }
}
