import { TestBed } from '@angular/core/testing';

import { EnrollmentServerService } from './enrollment-server.service';

describe('EnrollmentServerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EnrollmentServerService = TestBed.get(EnrollmentServerService);
    expect(service).toBeTruthy();
  });
});
