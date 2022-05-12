import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Articolo } from '../model/articolo';
import { ArticoliStore } from '../articoli.store'

@Component({
  selector: 'Form-Reactive',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent {

  myForm: any;
  FormGroup: any;
  model: Articolo;

  constructor(fb: FormBuilder, private readonly articoliStore: ArticoliStore) {
    this.model = new Articolo();
    this.myForm = fb.group({
      titolo: ['titolo',[Validators.required, Validators.minLength(3)]],
      autore: ['autore',[Validators.required]],
      testo: ['testo',[Validators.required]]
    })
  }

  add() {
    this.articoliStore.addArticolo(this.myForm.value);
  }
}
