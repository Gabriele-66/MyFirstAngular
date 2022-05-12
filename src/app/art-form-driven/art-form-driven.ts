import { Component, OnInit } from '@angular/core';
import { Articolo } from '../model/articolo';
import { ArticoliStore } from '../articoli.store'

@Component({
  selector: 'Form-Driven',
  templateUrl: './art-form-driven.html',
  styleUrls: ['./art-form-driven.css']
})
export class ArticoloFormComponent implements OnInit {

  model: Articolo;

  constructor(private readonly articoliStore: ArticoliStore) {
    this.model = new Articolo();
  }

  add(art: Articolo) {
    this.articoliStore.addArticolo(art);
  }

  ngOnInit(): void {
  }

}
