import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ArticoloFormComponent } from './art-form-driven/art-form-driven';
import { ReactiveFormComponent } from './art-form-reactive/reactive-form.component';
import { ArticoliService } from './ServiceArticoli/articoli.service';
import { ArticoliStore } from './articoli.store'

@NgModule({
  declarations: [
    AppComponent,
    ArticoloFormComponent,
    ReactiveFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [ArticoliService],
  bootstrap: [AppComponent]
})
export class AppModule { }
