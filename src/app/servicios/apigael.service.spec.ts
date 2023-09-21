import { TestBed } from '@angular/core/testing';

import { ApigaelService } from './apigael.service';

describe('ApigaelService', () => {
  let service: ApigaelService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApigaelService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
