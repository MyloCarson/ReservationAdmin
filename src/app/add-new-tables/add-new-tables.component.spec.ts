import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewTablesComponent } from './add-new-tables.component';

describe('AddNewTablesComponent', () => {
  let component: AddNewTablesComponent;
  let fixture: ComponentFixture<AddNewTablesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddNewTablesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddNewTablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
