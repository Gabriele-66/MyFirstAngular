import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ReactiveFormComponent } from './art-form-reactive/reactive-form.component';
import { ArticoloFormComponent } from './art-form-driven/art-form-driven';

const routes: Routes = [
  { path: 'ReactiveForm', component: ReactiveFormComponent },
  { path: 'DrivenForm', component: ArticoloFormComponent },
  { path: 'Home', component: AppComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
