import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  clickCounter: number = 0;
  Id: string = '10';
  name: string = 'start ' + this.Id;
  clicked = false;
  constructor() { 
  }

  ngOnInit() {
  }

  countClick() {

    this.clickCounter += 1;
  }
  reset(){
    this.clicked = true;
    this.clickCounter = 0;
  }
}
