import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Articolo } from '../model/articolo';
import { ArticoliService } from '../ServiceArticoli/articoli.service';

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

  constructor(fb: FormBuilder,private articoliService: ArticoliService) {
    this.model = new Articolo();
    this.myForm = fb.group({
      titolo: ['titolo',[Validators.required, Validators.minLength(3)]],
      autore: ['autore',[Validators.required]],
      testo: ['testo',[Validators.required]]
    })
    this.myForm.valueChanges.subscribe((value: { titolo: string; autore: string; testo: string; }) => {

    });

  }
  reactForm() {
    this.submitReact.emit(this.myForm.value);
  }

  ngOnInit(): void {
  }

}
