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

  constructor(fb: FormBuilder) {
    this.model = new Articolo();
    this.myForm = fb.group({
      titolo: ['titolo',[Validators.required, Validators.minLength(3)]],
      autore: ['autore',[Validators.required]],
      testo: ['testo',[Validators.required]]
    })
  }

  reactForm() {
    this.submitReact.emit(this.myForm.value);
  }

  ngOnInit(): void {
  }

}
