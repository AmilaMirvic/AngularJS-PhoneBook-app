import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PhonebookComponent } from './phonebook/phonebook.component';


const routes: Routes = [
  {
    path: "",
    component: PhonebookComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
