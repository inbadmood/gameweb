import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs/Rx';
import { HomeService } from './home-service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  gameiconsrc: string;
  timerNum= 0;
  gamename= [];
  sidesrc: string;
  jpsrc: string;
  imgsrc= [];
  tiles = [];
  gameUrls= [];
     constructor(private homeService: HomeService) {}
              getGameName(): void {
               this.homeService.getGameName().subscribe(gamename => this.gamename = gamename);
              }
              getGameUrls() {
                this.homeService.getGameUrls().subscribe(gameUrls => this.gameUrls = gameUrls);
              }
              getSidesrc() {
                this.homeService.getSidesrc().subscribe(sidesrc => this.sidesrc = sidesrc);
              }
              getJpsrc() {
                this.homeService.getJpsrc().subscribe(jpsrc => this.jpsrc = jpsrc);
              }
      ngOnInit() {
                this.getGameName();
                this.getGameUrls();
                this.getSidesrc();
                this.getJpsrc();
            for (let i = 0 ; i < 15; i++) {
                this.gameiconsrc = 'http://106.104.137.96:8080/TestApp/gameWeb/assets/images/icon/game-' + i + '.png';
                this.tiles[i] = {cols: 1, rows: 1};
                this.imgsrc[i] = this.gameiconsrc;
    }

      // this.utcTime();
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
  }, 3000);
  }
}
