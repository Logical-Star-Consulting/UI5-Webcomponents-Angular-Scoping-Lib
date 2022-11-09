import { Component, OnInit } from '@angular/core';



import "@ui5/webcomponents/dist/BusyIndicator";
import { setCustomElementsScopingSuffix } from '@ui5/webcomponents-base/dist/CustomElementsScope';
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
