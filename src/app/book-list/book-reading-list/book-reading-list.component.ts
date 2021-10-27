import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormControlName, FormGroup, Validators} from "@angular/forms";
import { Book } from 'src/app/book';
import { BookService } from '../service/book.service';

@Component({
  selector: 'app-book-read-list',
  templateUrl: './book-read-list.component.html',
  styleUrls: ['./book-read-list.component.css']
})
export class BookReadingListComponent implements OnInit {
  books : Book[] = [];
  constructor(private bookService: BookService) { }

  ngOnInit(): void {
    this.getReadingBook()
  }


  getReadingBook() {
    this.bookService.getReadingBook().subscribe(res => {
      this.books = res;
    })
  }
}
