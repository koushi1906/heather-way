import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';

interface MyForm {
  email: FormControl,
  pass: FormControl,
  cpass: FormControl
}

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  constructor(private authService: AuthService){}

  registerForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    pass: new FormControl('', [Validators.required, Validators.minLength(7), Validators.maxLength(15)]),
    cpass: new FormControl('', [Validators.required])
  } as MyForm)

  get email() {
    return this.registerForm.get('email');
  }

  get pass() {
    return this.registerForm.get('pass');
  }

  get cpass() {
    return this.registerForm.get('cpass');
  }

  showPassword: boolean = true;

  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }

  showCpassword: boolean = false;
  toggleCPasswordVisibility() {
    this.showCpassword = !this.showCpassword;
  }

  regUser() {
    this.authService.register(this.registerForm);
  }
}
