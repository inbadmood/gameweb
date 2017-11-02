import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.css']
})
export class AsideComponent implements OnInit {
  @Output() menuClick = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
  menu_click() {
    this.menuClick.emit(null);
  }
}
