import { BookReadingListComponent } from './book-list/book-reading-list/book-reading-list.component';
import { BookReadListComponent } from './book-list/book-read-list/book-read-list.component';
import { BookListComponent } from './book-list/book-list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
{ path:'',
  component: BookListComponent
},
{ path:'book-read',
component: BookReadListComponent
},
{ path:'book-reading',
component: BookReadingListComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
