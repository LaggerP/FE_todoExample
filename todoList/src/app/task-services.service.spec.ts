import { TestBed } from '@angular/core/testing';

import { TaskServicesService } from './services/task.service';

describe('TaskServicesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TaskServicesService = TestBed.get(TaskServicesService);
    expect(service).toBeTruthy();
  });
});
