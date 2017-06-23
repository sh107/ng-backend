import { TestBed, inject } from '@angular/core/testing';

import { PatientSecureService } from './patient-secure.service';

describe('PatientSecureService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PatientSecureService]
    });
  });

  it('should be created', inject([PatientSecureService], (service: PatientSecureService) => {
    expect(service).toBeTruthy();
  }));
});
