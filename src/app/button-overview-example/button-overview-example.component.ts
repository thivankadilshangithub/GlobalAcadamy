import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-button-overview-example',
  templateUrl: './button-overview-example.component.html',
  styleUrls: ['./button-overview-example.component.css']
})
export class ButtonOverviewExampleComponent implements OnInit {

  images = [  
    { img: "../assets/images/angular.png" },  
    { img: "../assets/images/react-1.png" },  
    { img: "../assets/images/Vue-js.png" },  
    { img: "../assets/images/Emberjs.png" },  
    { img: "../assets/images/jquery-1.png" }, 
   
  ];  

  slideConfig = {  
    "slidesToShow": 3,  
    "slidesToScroll": 3,  
    "dots": true,  
    "infinite": true  
  }; 
  

  constructor() { }

  ngOnInit(): void {
  }

}
