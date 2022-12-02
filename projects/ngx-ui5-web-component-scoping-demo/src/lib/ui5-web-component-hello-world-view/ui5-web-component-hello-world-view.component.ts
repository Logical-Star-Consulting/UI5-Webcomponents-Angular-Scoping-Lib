import { Component, OnInit } from '@angular/core';

import "webcomponents-1-8/dist/BusyIndicator";
import "webcomponents-1-8/dist/Label";
import "webcomponents-1-8/dist/Input";
import "webcomponents-1-8/dist/Title";

//import { setCustomElementsScopingSuffix } from 'webcomponents-base-1-8/dist/CustomElementsScope';
import { setCustomElementsScopingSuffix } from '@ui5/webcomponents-base/dist/CustomElementsScope';
setCustomElementsScopingSuffix
setCustomElementsScopingSuffix("scoping-demo");

@Component({
  selector: 'lib-ui5-web-component-hello-world-view',
  templateUrl: './ui5-web-component-hello-world-view.component.html',
  styleUrls: ['./ui5-web-component-hello-world-view.component.css']
})
export class UI5WebComponentHelloWorldViewComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
