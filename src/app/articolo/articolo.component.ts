import { Component, Input, OnInit } from '@angular/core';
import { Articolo } from '../model/articolo';


@Component({
  selector: 'articolo',
  templateUrl: './articolo.component.html',
  styleUrls: ['./articolo.component.css']
})

export class ArticoloComponent implements OnInit {

  @Input()articolo!: Articolo;
  constructor() {
  }

  inc(event: { preventDefault: () => void; }) {
    this.articolo.numApprezzamenti++;
    console.log(event)
  }

  ngOnInit(): void {
  }

}
