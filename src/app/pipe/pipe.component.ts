import { Component, OnInit } from '@angular/core';
import { Pipe, PipeTransform } from '@angular/core';

@Component({
  selector: 'app-pipe',
  templateUrl: './pipe.component.html',
  styleUrls: ['./pipe.component.css']
})

export class PipeComponent implements OnInit {

  title = 'GitPrAnguarMyFirst';
  oggi: number = Date.now();

  constructor() { }

  ngOnInit(): void {
  }

}
