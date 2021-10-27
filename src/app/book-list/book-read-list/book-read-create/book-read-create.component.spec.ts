import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookReadCreateComponent } from './book-read-create.component';

describe('BookReadCreateComponent', () => {
  let component: BookReadCreateComponent;
  let fixture: ComponentFixture<BookReadCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookReadCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookReadCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
