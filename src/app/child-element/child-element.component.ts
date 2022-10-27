import {Component, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'child-element',
  templateUrl: './child-element.component.html',
  styleUrls: ['./child-element.component.css'],
  encapsulation: ViewEncapsulation.ShadowDom,
})
export class ChildElementComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
