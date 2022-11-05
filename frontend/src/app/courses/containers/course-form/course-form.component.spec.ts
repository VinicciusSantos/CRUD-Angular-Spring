import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { CoursesModule } from '../../courses.module';
import { CourseFormComponent } from './course-form.component';

describe('CourseFormComponent', () => {
  let component: CourseFormComponent;
  let fixture: ComponentFixture<CourseFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CourseFormComponent],
      imports: [CoursesModule, BrowserAnimationsModule, HttpClientModule],
    }).compileComponents();

    fixture = TestBed.createComponent(CourseFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
