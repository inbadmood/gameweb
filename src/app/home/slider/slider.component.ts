import { Component, OnInit } from '@angular/core';
import {NgbCarouselConfig} from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css'],
  providers: [NgbCarouselConfig] // add NgbCarouselConfig to the component providers
})
export class SliderComponent implements OnInit {
  homeads= [];
  homeadsrcs= [];
  constructor(config: NgbCarouselConfig) {
    // customize default values of carousels used by this component tree
    config.interval = 3000;
    config.wrap = true;
    config.keyboard = false;
  }
  ngOnInit() {
     for (let i = 0 ; i < 6; i++) {
    this.homeads[i] = { };
    this.homeadsrcs[i] = 'http://106.104.137.96:8080/TestApp/gameWeb/assets/images/ui/HOMEPIC_' + i + '.jpg';
  }
  }

}
