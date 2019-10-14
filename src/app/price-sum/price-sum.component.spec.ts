import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PriceSumComponent } from './price-sum.component';

describe('PriceSumComponent', () => {
  let component: PriceSumComponent;
  let fixture: ComponentFixture<PriceSumComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PriceSumComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PriceSumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
