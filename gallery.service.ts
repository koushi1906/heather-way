import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GalleryService {

  constructor() { }

  getGallery(){
    return [
      {id:1, img: 'https://lighthouse.app/cdn/1920/photos/72192/backup/0_6AAC1752755C4083A63129BB695F8171.JPG' },
      {id:2, img: 'https://lighthouse.app/cdn/1920/photos/72192/backup/10_12C27B4849C0478CA3AF2DDE4953E73C.JPG' },
      {id:3, img: 'https://lighthouse.app/cdn/1920/photos/72192/backup/11_363742F4BDAE4987A1981B2C7E9ADFD2.JPG' },
      {id:4, img: 'https://lighthouse.app/cdn/1920/photos/72192/backup/1_84BD331DA1C2493082490AF5CC4500D6.JPG' },
      {id:5, img: 'https://lighthouse.app/cdn/1920/photos/72192/backup/2_D9E3FFE37B56444281E222EECEBD5A94.JPG' },
      {id:6, img: 'https://lighthouse.app/cdn/1920/photos/72192/backup/3_A55BBBC1A5204040B4E3D5F185F9F2B0.JPG' },
      {id:7, img: 'https://lighthouse.app/cdn/1920/photos/72192/backup/4_E8B5AE89F24E44E9BBA8A4664E6F657D.JPG' },
      {id:8, img: 'https://lighthouse.app/cdn/1920/photos/72192/backup/5_B75E4EEF8E8A48A2A8D68612CB2372A8.JPG' },
      {id:9, img: 'https://lighthouse.app/cdn/1920/photos/72192/backup/6_E3E8D28B04B940F4B642BB6080570C19.JPG' },
      {id:10, img: 'https://lighthouse.app/cdn/1920/photos/72192/backup/7_13B561206EDC4CE291541E7EE98FB7CD.JPG' },
      {id:11, img: 'https://lighthouse.app/cdn/1920/photos/72192/backup/9_83E2C494472F48CB90FD7BC4A9937FF4.JPG' },
      {id:12, img: 'https://lighthouse.app/cdn-cgi/image/width=1920/https://picturescdn.alndata.com/?pid=adf809a2-de7f-4956-92ce-e0df602323d4' },
    ];
  }
}
