import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Output() sidenavClick = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
  sidenav_click() {
    this.sidenavClick.emit(null);
  }
}
