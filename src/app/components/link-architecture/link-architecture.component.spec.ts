import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkArchitectureComponent } from './link-architecture.component';

describe('LinkArchitectureComponent', () => {
  let component: LinkArchitectureComponent;
  let fixture: ComponentFixture<LinkArchitectureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LinkArchitectureComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LinkArchitectureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
