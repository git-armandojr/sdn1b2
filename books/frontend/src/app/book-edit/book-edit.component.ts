import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { BooksService } from '../books.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-book-edit',
  templateUrl: './book-edit.component.html',
  styleUrls: ['./book-edit.component.css']
})
export class BookEditComponent implements OnInit {

  angForm: FormGroup;
  book: any = {};

  constructor(private route: ActivatedRoute, private router: Router, private bs: BooksService, private fb: FormBuilder) {
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

  updateBook(BookTitle, BookAuthor, BookDescription, BookPages, BookISBN, id) {
    this.route.params.subscribe(params => {
      this.bs.updateBook(BookTitle, BookAuthor, BookDescription, BookPages, BookISBN, params.id);
      this.router.navigate(['books']);
    });
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.bs.editBook(params['id']).subscribe(res => {
        this.book = res;
      });
    });
  }

}
