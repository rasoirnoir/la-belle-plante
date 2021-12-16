import { TestBed } from '@angular/core/testing';

import { ListePlantesService } from './liste-plantes.service';

describe('ListePlantesService', () => {
  let service: ListePlantesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListePlantesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
