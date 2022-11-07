import { TestBed } from '@angular/core/testing';

import { CoursesResolver } from './courses.resolver';

describe('CoursesResolver', () => {
  let resolver: CoursesResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(CoursesResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
