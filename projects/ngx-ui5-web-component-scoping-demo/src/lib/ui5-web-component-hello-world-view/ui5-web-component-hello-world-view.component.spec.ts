import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UI5WebComponentHelloWorldViewComponent } from './ui5-web-component-hello-world-view.component';

describe('UI5WebComponentHelloWorldViewComponent', () => {
  let component: UI5WebComponentHelloWorldViewComponent;
  let fixture: ComponentFixture<UI5WebComponentHelloWorldViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UI5WebComponentHelloWorldViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UI5WebComponentHelloWorldViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
