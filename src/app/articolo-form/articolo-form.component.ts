import { Component, OnInit } from '@angular/core';
import { Articolo } from '../model/articolo';

@Component({
  selector: 'aForm',
  templateUrl: './articolo-form.component.html',
  styleUrls: ['./articolo-form.component.css']
})
export class ArticoloFormComponent implements OnInit {

  model = new Articolo();

  constructor() { }

  ngOnInit(): void {
  }

}
