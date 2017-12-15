import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-newidea',
  templateUrl: './newidea.component.html',
  styleUrls: ['./newidea.component.css']
})
export class NewideaComponent implements OnInit {
  isFavorite:boolean;

  onclick(){
    this.isFavorite= !this.isFavorite;
  }
  constructor() { }

  ngOnInit() {
  }

}
