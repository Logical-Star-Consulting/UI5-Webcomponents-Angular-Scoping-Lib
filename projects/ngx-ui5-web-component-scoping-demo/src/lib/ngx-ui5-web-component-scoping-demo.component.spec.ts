import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxUi5WebComponentScopingDemoComponent } from './ngx-ui5-web-component-scoping-demo.component';

describe('NgxUi5WebComponentScopingDemoComponent', () => {
  let component: NgxUi5WebComponentScopingDemoComponent;
  let fixture: ComponentFixture<NgxUi5WebComponentScopingDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgxUi5WebComponentScopingDemoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgxUi5WebComponentScopingDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
