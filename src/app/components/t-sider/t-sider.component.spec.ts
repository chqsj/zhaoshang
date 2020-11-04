import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TSiderComponent } from './t-sider.component';

describe('TSiderComponent', () => {
  let component: TSiderComponent;
  let fixture: ComponentFixture<TSiderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TSiderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TSiderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
