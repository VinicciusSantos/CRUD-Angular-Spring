import { CoursesService } from './../services/courses.service';
import { Component, OnInit } from '@angular/core';
import { Course } from '../models/course';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss'],
})
export class CoursesComponent implements OnInit {
  courses: Course[] = [];
  displayedColumns: string[] = ['name', 'category'];

  constructor(
    private _coursesService: CoursesService,
    private _httpClient: HttpClient
  ) {}

  ngOnInit() {
    this.courses = this._coursesService.list();
  }
}
