import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  tiles = [
    {src: './../../assets/images/icon/game-0.png', cols: 1, rows: 1},
    {src: './../../assets/images/icon/game-1.png', cols: 1, rows: 1},
    {src: './../../assets/images/icon/game-2.png', cols: 1, rows: 1},
    {src: './../../assets/images/icon/game-3.png', cols: 1, rows: 1},
    {src: './../../assets/images/icon/game-4.png', cols: 1, rows: 1},
    {src: './../../assets/images/icon/game-5.png', cols: 1, rows: 1},
    {src: './../../assets/images/icon/game-6.png', cols: 1, rows: 1},
  ];
  constructor() { }

  ngOnInit() {
  }

}
