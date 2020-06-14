import { TestBed } from '@angular/core/testing';

import { ChallengerService } from './challenger.service';

describe('TeamService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ChallengerService = TestBed.get(ChallengerService);
    expect(service).toBeTruthy();
  });
});
