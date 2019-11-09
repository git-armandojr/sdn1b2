import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import Book from './Book';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  uri = 'http://localhost:4000/books'

  constructor(private http: HttpClient, private router: Router) { }

  addBook(BookTitle, BookAuthor, BookDescription, BookPages, BookISBN) {
    const obj = {
      BookTitle,
      BookAuthor,
      BookDescription,
      BookPages,
      BookISBN
    };

    console.log(obj);

    this.http.post(`${this.uri}/add`, obj)
      .subscribe((res) => {
        console.log('Done');
        this.router.navigate(['/books']);
      },
        (error) => {
          console.log("err", error);
        });
  }

  getBooks() {
    return this
      .http
      .get(`${this.uri}`);
  }

  editBook(id) {
    return this
      .http
      .get(`${this.uri}/edit/${id}`);
  }

  updateBook(BookTitle, BookAuthor, BookDescription, BookPages, BookISBN, id) {
    const obj = {
      BookTitle,
      BookAuthor,
      BookDescription,
      BookPages,
      BookISBN
    };
    this
      .http
      .post(`${this.uri}/update/${id}`, obj)
      .subscribe(res => console.log('Done'));
  }

  deleteBook(id) {
    return this
      .http
      .get(`${this.uri}/delete/${id}`);
  }

}
