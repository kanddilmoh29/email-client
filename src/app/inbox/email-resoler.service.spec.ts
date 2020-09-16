import { TestBed } from '@angular/core/testing';

import { EmailResolerService } from './email-resoler.service';

describe('EmailResolerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EmailResolerService = TestBed.get(EmailResolerService);
    expect(service).toBeTruthy();
  });
});
