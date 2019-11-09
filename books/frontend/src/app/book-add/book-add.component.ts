import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { BooksService } from '../books.service';

@Component({
  selector: 'app-book-add',
  templateUrl: './book-add.component.html',
  styleUrls: ['./book-add.component.css']
})
export class BookAddComponent implements OnInit {

  angForm: FormGroup;

  constructor(private fb: FormBuilder, private bs: BooksService) {
    this.createForm();
  }

  createForm() {
    this.angForm = this.fb.group({
      BookTitle: ['', Validators.required],
      BookAuthor: ['', Validators.required],
      BookDescription: ['', Validators.required],
      BookPages: ['', Validators.required],
      BookISBN: ['', Validators.required]
    });
  }

  addBook(BookTitle, BookAuthor, BookDescription, BookPages, BookISBN) {
    this.bs.addBook(BookTitle, BookAuthor, BookDescription, BookPages, BookISBN);
  }

  ngOnInit() {
  }

}
