import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { getAuth, signInWithEmailAndPassword,createUserWithEmailAndPassword, signOut  } from 'firebase/auth';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isAuthenticated : boolean = false;

  constructor(private router: Router) { }

  private isAuthenticatedSubject = new BehaviorSubject<boolean>(false);
  isAuthenticated$ = this.isAuthenticatedSubject.asObservable();

  login(loginForm: FormGroup): Promise<boolean> {
    return new Promise((resolve, reject) => {
      const auth = getAuth();
      const email = loginForm.get('email')?.value;
      const password = loginForm.get('password')?.value;
  
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          this.isAuthenticatedSubject.next(true);
          this.isAuthenticated = true;
          this.router.navigate(['home']);
          resolve(true);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          this.isAuthenticatedSubject.next(false);
          this.isAuthenticated = false;
          alert('Credentials do not match');
          reject(false);
        });
    });
  }
  


  passwordMatched: boolean = true;

  register(registerForm: FormGroup){
    
    if (registerForm.get('pass')?.value !== registerForm.get('cpass')?.value) {
      this.passwordMatched = false;
      alert('passwords do not match');
      return; // Return here if passwords do not match
    }

    const auth = getAuth();
    const email = registerForm.get('email')?.value;
    const pass = registerForm.get('pass')?.value;

    createUserWithEmailAndPassword(auth, email, pass)
      .then((userCredential) => {
        this.router.navigate(['']);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  }

  logout(){
    const auth = getAuth();
    signOut(auth).then(() => {
      this.router.navigate(['']);
      this.isAuthenticated = false;
      this.isAuthenticatedSubject.next(false);
    })
    .catch((err) =>{

    });
  }
}



