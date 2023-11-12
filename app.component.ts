import { Component, OnInit } from '@angular/core';
import {initializeApp} from "firebase/app"
import { firebaseConfig } from './firebase.config';
import { AuthService } from './auth/auth.service';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private authService: AuthService, private router:Router){}

  title = 'Heatherway';

  ngOnInit(): void {
    initializeApp(firebaseConfig);
  }

  isAuthenticated(){
    return this.authService.isAuthenticated;
  }

  logOut(){
    this.authService.logout();
  }

  isMobileMenuOpen = false;

  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }

}
