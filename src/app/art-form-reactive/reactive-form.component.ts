import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Articolo } from '../model/articolo';

@Component({
  selector: 'Form-Reactive',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {

  myForm: any;
  FormGroup: any;
  @Input() model: Articolo;
  @Output() submitReact = new EventEmitter<Articolo>();

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
      titolo: ['titolo',[Validators.required, Validators.minLength(3)]],
      autore: ['autore',[Validators.required]],
      testo: ['testo',[Validators.required]]
    })
    this.myForm.valueChanges.subscribe((value: { titolo: string; autore: string; testo: string; }) => {
    /*  this.model.titolo = value.txtTitolo;
      this.model.autore = value.txtAutore;
      this.model.testo = value.txtTesto;*/
      //console.log(this.myForm.controls['titolo'].value)
      //console.log(this.myForm.controls)
    });

  }
//this.myForm.controls["txtTitolo"].valueChanges.subscribe(value => {this.model.titolo = value;}); per singolo value

  reactForm() {
    console.log(this.myForm.value);
    this.submitReact.emit(this.myForm.value);
  //  console.log(this.myForm.controls["txtTitolo"].value);
  }

  ngOnInit(): void {
  }

}
