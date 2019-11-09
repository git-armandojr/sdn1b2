import { Component, OnInit } from '@angular/core';
import Book from '../Book';
import { BooksService } from '../books.service';

@Component({
  selector: 'app-book-get',
  templateUrl: './book-get.component.html',
  styleUrls: ['./book-get.component.css']
})
export class BookGetComponent implements OnInit {

  books: any = [];
  constructor(private bs: BooksService) { }

  ngOnInit() {
    this.bs
      .getBooks()
      .subscribe(data => {
        this.books = data;
      });
  }

  deleteBook(id) {
    this.bs.deleteBook(id).subscribe(res => {
      this.books.splice(id, 1);
    });
  }

}
