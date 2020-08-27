import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerFeaturesListComponent } from './customer-features-list.component';

describe('CustomerFeaturesListComponent', () => {
  let component: CustomerFeaturesListComponent;
  let fixture: ComponentFixture<CustomerFeaturesListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerFeaturesListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerFeaturesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
