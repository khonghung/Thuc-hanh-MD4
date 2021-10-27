import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookListComponent } from './book-list/book-list.component';
import { BookReadListComponent } from './book-list/book-read-list/book-read-list.component';
import { BookReadCreateComponent } from './book-list/book-read-list/book-read-create/book-read-create.component';
import { BookReadingListComponent } from './book-list/book-reading-list/book-reading-list.component';

@NgModule({
  declarations: [
    AppComponent,
    BookListComponent,
    BookReadListComponent,
    BookReadingListComponent,
    BookReadCreateComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
