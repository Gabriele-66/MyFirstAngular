import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {

  myForm: any;
  FormGroup: any;
/*
  constructor() {
    this.myForm = new FormGroup({
      txtTitolo: new FormControl(),
      txtAutore: new FormControl(),
      txtTesto: new FormControl()
    });
  }
  metodo piu compatto e ottimale con form builder
*/
  constructor(fb: FormBuilder) {
    this.myForm = fb.group({
      txtTitolo: ['',[Validators.required, Validators.minLength(3)]],
      txtAutore: ['aut',[Validators.required]],
      txtTesto: ['',[Validators.required]]
    })
  }

  reactForm() {
    console.log(this.myForm.value);
  //  console.log(this.myForm.controls["txtTitolo"].value);
  }

  ngOnInit(): void {
  }

}
