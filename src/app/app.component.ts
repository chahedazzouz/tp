import { Component, OnInit } from '@angular/core';
import { FaceSnap } from './models/face-snap.model';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  faceSnap!:FaceSnap[];
  ngOnInit(){
    this.faceSnap = [
    {
    title:'Archiblad',
    description:"Mon meilleur ami depuis tout petit !",
    imageUrl:'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
    createdDate:new Date(),
    snaps:0,
    buttonText:'oh snap'
  },
  {
    title:'three rock mountain',
    description:'endroit magnifique',
    imageUrl:'https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Three_Rock_Mountain_Southern_Tor.jpg/2880px-ThreeRock_Mountain.jpg',
    createdDate:new Date(),
    snaps:0,
    buttonText:'oh snap'
  },
  {
    title:'tn bon repas',
    description:'yummn c bon!',
    imageUrl:'https://wtop.Com/wp-content/upload/2020/06/HEALTHYRESH.jpg',
    createdDate:new Date(),
    snaps:0,
    buttonText:'oh snap'
  }
  ];
}
}