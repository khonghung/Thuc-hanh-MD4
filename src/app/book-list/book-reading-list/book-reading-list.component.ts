import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormControlName, FormGroup, Validators} from "@angular/forms";
import { Book } from 'src/app/book';
import { BookService } from '../service/book.service';

@Component({
  selector: 'app-book-read-list',
  templateUrl: './book-reading-list.component.html',
  styleUrls: ['./book-reading-list.component.css']
})
export class BookReadingListComponent implements OnInit {
  books : Book[] = [];
  constructor(private bookService: BookService) { }

  ngOnInit(): void {
    this.getReading();
  }

  getReading() {
    this.bookService.getAll().subscribe(res => {
      this.books = res;
    })
  }

}
