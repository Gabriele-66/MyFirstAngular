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
