import { TestBed } from '@angular/core/testing';

import { GuardService } from './guard.service';

xdescribe('GuardService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GuardService = TestBed.get(GuardService);
    expect(service).toBeTruthy();
  });
});