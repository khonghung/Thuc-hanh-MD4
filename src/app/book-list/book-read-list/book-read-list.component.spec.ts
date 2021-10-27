import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookReadListComponent } from './book-read-list.component';

describe('BookReadListComponent', () => {
  let component: BookReadListComponent;
  let fixture: ComponentFixture<BookReadListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookReadListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookReadListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
