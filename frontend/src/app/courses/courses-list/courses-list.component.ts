import { Course } from './../models/course';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.scss'],
})
export class CoursesListComponent {
  @Input() courses: Course[] = [];
  readonly displayedColumns: string[] = ['_id', 'name', 'category', 'actions'];

  constructor(private _router: Router) {}

  onAdd() {
    console.log('onAdd');
    this._router.navigate(['courses/new']);
  }
}
