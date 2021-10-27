import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormControlName, FormGroup, Validators} from "@angular/forms";
import { ActivatedRoute, Router } from '@angular/router';
import { Book } from 'src/app/book';
import { BookService } from '../service/book.service';

@Component({
  selector: 'app-book-read-list',
  templateUrl: './book-read-list.component.html',
  styleUrls: ['./book-read-list.component.css']
})
export class BookReadListComponent implements OnInit {
  books : Book[] = [];
  constructor(private bookService: BookService) { }

  ngOnInit(): void {
    this.getAllBook()
  }


  getAllBook() {
    this.bookService.getAll().subscribe(res => {
      this.books = res;
    })
  }

  changeRead(id: any) {
    this.bookService.findByID(id).subscribe(res => {
        console.log(res);
        res.read = false;
    })

  }
}
