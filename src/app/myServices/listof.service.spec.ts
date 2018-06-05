/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ListofService } from './listof.service';

describe('ListofService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ListofService]
    });
  });

  it('should ...', inject([ListofService], (service: ListofService) => {
    expect(service).toBeTruthy();
  }));
});
