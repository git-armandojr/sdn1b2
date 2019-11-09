import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookAddComponent } from './book-add/book-add.component';
import { BookEditComponent } from './book-edit/book-edit.component';
import { BookGetComponent } from './book-get/book-get.component';


const routes: Routes = [
  {
    path: 'book/create',
    component: BookAddComponent
  },
  {
    path: 'edit/:id',
    component: BookEditComponent
  },
  {
    path: 'books',
    component: BookGetComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
