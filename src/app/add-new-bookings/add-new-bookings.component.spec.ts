import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewBookingsComponent } from './add-new-bookings.component';

describe('AddNewBookingsComponent', () => {
  let component: AddNewBookingsComponent;
  let fixture: ComponentFixture<AddNewBookingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddNewBookingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddNewBookingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
