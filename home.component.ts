import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  title:string = 'HEATHERWAY APARTMENTS';
  src:string = 'https://cimg8.ibsrv.net/ibimg/www.apartmentratings.com/1200x568_60-1/k/g/o/kGOaSptu7sf.jpg';
  desc:string = 'EVERYONE WANTS TO LIVE HERE!!!';
  cont:string = 'Contact Us';
  email:string = 'contact@everyonewantstolivehere.com';
  time:string = '08:00 am - 05:00 pm'
  src2:string='https://img1.wsimg.com/isteam/ip/994f1f64-dcae-4f31-83bb-8c3e5a4b2aba/IMG_9572.JPG/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:984,h:738';

  isClicked : boolean = false;
  expand(){
    return this.isClicked = true;
  }
  reset(){
    return this.isClicked = false;
  }
}
