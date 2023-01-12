import { TestBed } from '@angular/core/testing';

import { ClientReservService } from './client-reserv.service';

describe('ClientReservService', () => {
  let service: ClientReservService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClientReservService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
