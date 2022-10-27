import {Component, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-page-one',
  templateUrl: './page-one.component.html',
  styleUrls: ['./page-one.component.css'],
  encapsulation: ViewEncapsulation.ShadowDom,
})
export class PageOneComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
