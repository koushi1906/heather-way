import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class FloorplansService {

  constructor() { }

  getImages(){
    return [
      {src: 'https://www.americancampus.com/getmedia/2cc59ad6-da5e-42ee-88f1-43ff539f5ba6/669_1-Bed-1-Bath-ORIGINAL-01?width=660&height=440&ext=.png',
      desc:'1Bed - 1Bath',
    price:599,
  status:'available'},
      {src:'https://www.americancampus.com/getmedia/2cc59ad6-da5e-42ee-88f1-43ff539f5ba6/669_1-Bed-1-Bath-ORIGINAL-01?width=660&height=440&ext=.png',
       desc:'2Bed - 2Bath A',
      price:699,
    status:'waitlist'},
       {src: 'https://www.americancampus.com/getmedia/9a556216-aea4-43c8-af5b-8c2a6fa9d8f3/2-bed-2-bath-shared_twin-beds-01?width=660&height=440&ext=.png',
      desc: '2Bed - 2Bath B',
    price:899,
  status:'available'},
      {src:'https://www.americancampus.com/getmedia/db69003b-de4e-4f5d-9ec5-64238f32b755/669_2-Bed-2-Bath-C-01.png',
    desc:'2bed - 2bath c',
  price:650,
  status:'no'},
    ]
  }
}
