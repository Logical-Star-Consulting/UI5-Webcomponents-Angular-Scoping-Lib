import { TestBed } from '@angular/core/testing';

import { NgxUi5WebComponentScopingDemoService } from './ngx-ui5-web-component-scoping-demo.service';

describe('NgxUi5WebComponentScopingDemoService', () => {
  let service: NgxUi5WebComponentScopingDemoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxUi5WebComponentScopingDemoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
