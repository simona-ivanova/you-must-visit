import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const adminAuthGuard: CanActivateFn = (route, state) => {

  let _router = inject(Router);
  let isAdmin = localStorage.getItem('user');

  if (!isAdmin?.includes("FZL78YfA1mNCpIF2gBEBWvr8hVX2")) {
    alert('not authenticated user')
    _router.navigate(['/'])
    return false;
  }
  return true;
};
