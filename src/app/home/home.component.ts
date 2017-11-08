import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs/Rx';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  gameiconsrc: string;
  timerNum= 0;
  gamename= ['五龍爭霸', '阿里巴巴', 'SweetCandy', 'FortuneThai', 'GoldChicken',
             'GoldFish2', '虎克船長', 'HUCA', 'Jungle', 'LoveCity',
             'LuckyFruits', '魔法石', '法老', 'Royal777' ];

  sidesrc= 'http://106.104.137.96:8080/TestApp/gameWeb/assets/images/ui/sideline.png';
  jpsrc= 'http://106.104.137.96:8080/TestApp/gameWeb/assets/images/ui/jp.png';
  imgsrc= [];
  tiles = [];
   gameUrls = ['http://106.104.137.96:8080/TestApp/5dragons',
              'http://106.104.137.96:8080/TestApp/alibaba',
              'http://106.104.137.96:8080/TestApp/sweetcandy',
              'http://106.104.137.96:8080/TestApp/thai',
              'http://106.104.137.96:8080/TestApp/goldchicken',
              'http://106.104.137.96:8080/TestApp/goldfish2',
              'http://106.104.137.96:8080/TestApp/hook',
              'http://106.104.137.96:8080/TestApp/huca',
              'http://106.104.137.96:8080/TestApp/jungle',
              'http://106.104.137.96:8080/TestApp/lovecity',
              'http://106.104.137.96:8080/TestApp/luckyfruits',
              'http://106.104.137.96:8080/TestApp/magicgem',
              'http://106.104.137.96:8080/TestApp/pharaoh',
              'http://106.104.137.96:8080/TestApp/royal777'];
  constructor() { }

  ngOnInit() {
    for (let i = 0 ; i < 14; i++) {
      this.gameiconsrc = 'http://106.104.137.96:8080/TestApp/gameWeb/assets/images/icon/game-' + i + '.png';
      this.tiles[i] = {cols: 1, rows: 1};
      this.imgsrc[i] = this.gameiconsrc;
    }
    this.utcTime();
  }
  onMouseOut(i: number): void {
    this.imgsrc[i] =  'http://106.104.137.96:8080/TestApp/gameWeb/assets/images/icon/game-' + i + '.png';
  }
  onMouseOver(i: number): void {
    this.imgsrc[i] =  'http://106.104.137.96:8080/TestApp/gameWeb/assets/images/icon/game-D' + i + '.png';
  }
  gameClick(i: number): void {
    document.location.href = this.gameUrls[i];
  }
  utcTime(): void {
    setInterval(() => {
      this.timerNum = this.timerNum + 1 ;
  }, 200);
  }
}
