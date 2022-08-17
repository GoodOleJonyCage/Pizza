import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PizzaUIComponent } from './pizza-ui.component';

describe('PizzaUIComponent', () => {
  let component: PizzaUIComponent;
  let fixture: ComponentFixture<PizzaUIComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PizzaUIComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PizzaUIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
