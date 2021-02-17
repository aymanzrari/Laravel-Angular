import { TestBed } from '@angular/core/testing';

import { SignLoginServiceService } from './sign-login-service.service';

describe('SignLoginServiceService', () => {
  let service: SignLoginServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SignLoginServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
