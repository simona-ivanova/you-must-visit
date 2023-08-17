import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { isLoggedAuthGuard } from './is-logged-auth.guard';

describe('isLoginAuthGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => isLoggedAuthGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
