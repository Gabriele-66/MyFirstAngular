import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-articolo',
  templateUrl: './articolo.component.html',
  styleUrls: ['./articolo.component.css']
})
export class ArticoloComponent implements OnInit {

  titolo = 'Articolo';
  autore = 'Gab';
  testo = 'articolooooooooooooooooooooooooooo';

  constructor() {
  }

  ngOnInit(): void {
  }

}
