import { TestBed } from '@angular/core/testing';

import { BaseSenderService } from './base-sender.service';

xdescribe('BaseSenderService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BaseSenderService = TestBed.get(BaseSenderService);
    expect(service).toBeTruthy();
  });
});
