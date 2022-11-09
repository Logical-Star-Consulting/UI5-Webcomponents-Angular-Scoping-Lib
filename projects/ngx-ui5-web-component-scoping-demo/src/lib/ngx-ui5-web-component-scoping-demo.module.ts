import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { NgxUi5WebComponentScopingDemoComponent } from './ngx-ui5-web-component-scoping-demo.component';
import { UI5WebComponentHelloWorldViewComponent } from './ui5-web-component-hello-world-view/ui5-web-component-hello-world-view.component';



@NgModule({
  declarations: [
    NgxUi5WebComponentScopingDemoComponent,
    UI5WebComponentHelloWorldViewComponent
  ],
  imports: [
  ],
  exports: [
    NgxUi5WebComponentScopingDemoComponent,
    UI5WebComponentHelloWorldViewComponent
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class NgxUi5WebComponentScopingDemoModule { }
