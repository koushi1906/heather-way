import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from './auth.service';
import { take, tap } from 'rxjs';


export const authGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router); 
  return authService.isAuthenticated$.pipe(
    take(1),
    tap((isAuthenticated) => {
      console.log('isAuthenticated',isAuthenticated);
      if (!isAuthenticated) {
        router.navigate(['login']);
      }
    }));
 }
