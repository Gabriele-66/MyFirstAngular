import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ArticoloComponent } from './articolo/articolo.component';
import { ArticoloFormComponent } from './art-form-driven/art-form-driven';
import { ReactiveFormComponent } from './art-form-reactive/reactive-form.component';
import { TruncatePipe } from './pipes/truncate.pipe';
import { ArticoliService } from './ServiceArticoli/articoli.service';

@NgModule({
  declarations: [
    AppComponent,
    ArticoloComponent,
    ArticoloFormComponent,
    ReactiveFormComponent,
    TruncatePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [ArticoliService],
  bootstrap: [AppComponent]
})
export class AppModule { }
