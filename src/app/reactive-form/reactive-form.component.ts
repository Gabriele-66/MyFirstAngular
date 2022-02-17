import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Articolo } from '../model/articolo';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {

  myForm: any;
  FormGroup: any;
  @Input()
  model: Articolo;

/*
  constructor() {
    this.myForm = new FormGroup({
      txtTitolo: new FormControl(),
      txtAutore: new FormControl(),
      txtTesto: new FormControl()
    });
  }
  metodo piu compatto e ottimale con form builder

  constructor(fb: FormBuilder) {
    this.myForm = fb.group({
      txtTitolo: ['',[Validators.required, Validators.minLength(3)]],
      txtAutore: ['aut',[Validators.required]],
      txtTesto: ['',[Validators.required]]
    })
  }
*/
  constructor(fb: FormBuilder) {
    this.model = new Articolo();
    this.myForm = fb.group({
      txtTitolo: ['',[Validators.required, Validators.minLength(3)]],
      txtAutore: ['aut',[Validators.required]],
      txtTesto: ['',[Validators.required]]
    })
    this.myForm.valueChanges.subscribe((value: { txtTitolo: string; txtAutore: string; txtTesto: string; }) => {
    /*  this.model.titolo = value.txtTitolo;
      this.model.autore = value.txtAutore;
      this.model.testo = value.txtTesto;*/
      console.log(this.myForm.controls['txtTitolo'].value)
    });

  }
//this.myForm.controls["txtTitolo"].valueChanges.subscribe(value => {this.model.titolo = value;}); per singolo value

  reactForm() {
    console.log(this.myForm.value);
  //  console.log(this.myForm.controls["txtTitolo"].value);
  }

  ngOnInit(): void {
  }

}
