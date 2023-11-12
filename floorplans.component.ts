import { Component } from '@angular/core';
import { FloorplansService } from './floorplans.service';

interface Image{
  src: string,
  desc: string,
  price: number,
  status: string
}

@Component({
  selector: 'app-floorplans',
  templateUrl: './floorplans.component.html',
  styleUrls: ['./floorplans.component.css']
})

export class FloorplansComponent {

  constructor(private floorservice: FloorplansService){
    this.image = this.floorservice.getImages();
  }
  image:Image[] = [];

}
