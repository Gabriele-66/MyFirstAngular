import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Articolo } from '../model/articolo';


@Component({
  selector: 'articolo',
  templateUrl: './articolo.component.html',
  styleUrls: ['./articolo.component.css']
})

export class ArticoloComponent implements OnInit {

  @Input() articolo!: Articolo;
  @Output() like = new EventEmitter();

  pippo: any = 0;
  ruolo: any = 'admin';

  listarticoli: any[] = [1,2,3,4,5,'pippo','pluto','a',["aa","bb"] ]

  constructor() {}

  inc1(event: { preventDefault: () => void; }) {
    this.articolo.numApprezzamenti++;
    console.log(event);
    this.like.emit({ numApprezzamenti: this.articolo.numApprezzamenti });
  }

  ngOnInit(): void {
    console.log("Il componente è in fase di inizializzazione!");
  }
}
