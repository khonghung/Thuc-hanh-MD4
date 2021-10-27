import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookReadingListComponent } from './book-reading-list.component';

describe('BookReadingListComponent', () => {
  let component: BookReadingListComponent;
  let fixture: ComponentFixture<BookReadingListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookReadingListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookReadingListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
