import { TestBed, inject } from '@angular/core/testing';

import { DataService } from './data.service';
import { HttpClient } from '@angular/common/http';

describe('DataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DataService, HttpClient]
    });
  });

  // it('should be created', inject([DataService, HttpClient], (service: DataService) => {
  //   expect(service).toBeTruthy();
  // }));
});
