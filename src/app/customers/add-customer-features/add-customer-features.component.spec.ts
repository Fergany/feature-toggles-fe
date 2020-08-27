import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCustomerFeaturesComponent } from './add-customer-features.component';

describe('AddCustomerFeaturesComponent', () => {
  let component: AddCustomerFeaturesComponent;
  let fixture: ComponentFixture<AddCustomerFeaturesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddCustomerFeaturesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCustomerFeaturesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
