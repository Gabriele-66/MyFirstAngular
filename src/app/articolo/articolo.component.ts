import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Articolo } from '../model/articolo';


@Component({
  selector: 'app-articolo',
  templateUrl: './articolo.component.html',
  styleUrls: ['./articolo.component.css']
})

export class ArticoloComponent implements OnInit {

  @Input() art!: Articolo;
  @Output() like = new EventEmitter();

  pippo: any = 0;
  title = 'prove pipe';
  oggi: number = Date.now();

  constructor() {}

  inc1(event: { preventDefault: () => void; }) {
    this.art.numApprezzamenti++;
    console.log(event);
    this.like.emit({ numApprezzamenti: this.art.numApprezzamenti });
  }

  ngOnInit(): void {
    console.log("Il componente è in fase di inizializzazione!");
  }
}
