import { Injectable } from '@angular/core';
import { gameUrls, gamename, sidesrc, jpsrc } from './mock-data';
import { Observable } from 'rxjs/Rx';
import { of } from 'rxjs/observable/of';


@Injectable()
export class HomeService {

  constructor() { }

  getGameName(): Observable<string[]> {
    return of(gamename);
  }
  getGameUrls(): Observable<string[]>  {
    return of (gameUrls);
  }
  getSidesrc(): Observable<string>  {
    return of (sidesrc);
  }
  getJpsrc(): Observable<string>  {
    return of (jpsrc);
  }

}
