import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  gameiconsrc: string;
  gamename= ['5Dragons', 'Alibaba', 'SweetCandy', 'FortuneThai', 'GoldChicken',
             'GoldFish2', 'CaptainHook', 'HUCA', 'Jungle', 'LoveCity',
             'LuckyFruits', 'MagicGem', 'Pharaoh', 'Royal777' ];
  sidesrc= './../../assets/images/ui/sideline.png';
  jpsrc= './../../assets/images/ui/jp.png';
  imgsrc= [];
  tiles = [];

  constructor() { }

  ngOnInit() {
    for (let i = 0 ; i < 14; i++) {
      this.gameiconsrc = './../../assets/images/icon/game-' + i + '.png';
      this.tiles[i] = {cols: 1, rows: 1};
      this.imgsrc[i] = this.gameiconsrc;
    }
  }
  onMouseOut(i: number): void {
    this.imgsrc[i] =  './../../assets/images/icon/game-' + i + '.png';
  }
  onMouseOver(i: number): void {
    this.imgsrc[i] =  './../../assets/images/icon/game-D' + i + '.png';
  }

}
