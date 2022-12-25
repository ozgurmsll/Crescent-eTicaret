import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductTipsComponent } from './product-tips.component';

describe('ProductTipsComponent', () => {
  let component: ProductTipsComponent;
  let fixture: ComponentFixture<ProductTipsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductTipsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductTipsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
