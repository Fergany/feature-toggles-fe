import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignFeaturesComponent } from './assign-features.component';

describe('AssignFeaturesComponent', () => {
  let component: AssignFeaturesComponent;
  let fixture: ComponentFixture<AssignFeaturesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssignFeaturesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssignFeaturesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
