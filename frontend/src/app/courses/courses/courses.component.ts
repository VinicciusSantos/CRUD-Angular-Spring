import { Observable } from 'rxjs';
import { CoursesService } from './../services/courses.service';
import { Component, OnInit } from '@angular/core';
import { Course } from '../models/course';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss'],
})
export class CoursesComponent {
  courses: Observable<Course[]>;
  displayedColumns: string[] = ['name', 'category'];

  constructor(private _coursesService: CoursesService) {
    this.courses = this._coursesService.list();
  }
}
