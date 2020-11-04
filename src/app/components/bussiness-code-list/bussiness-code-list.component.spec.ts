import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BussinessCodeListComponent } from './bussiness-code-list.component';

describe('BussinessCodeListComponent', () => {
  let component: BussinessCodeListComponent;
  let fixture: ComponentFixture<BussinessCodeListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BussinessCodeListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BussinessCodeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
