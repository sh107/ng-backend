import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientSecureComponent } from './patient-secure.component';

describe('PatientSecureComponent', () => {
  let component: PatientSecureComponent;
  let fixture: ComponentFixture<PatientSecureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatientSecureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientSecureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
