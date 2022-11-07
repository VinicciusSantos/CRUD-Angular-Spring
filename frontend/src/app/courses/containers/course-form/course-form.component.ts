import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NonNullableFormBuilder } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { Course } from '../../models/course';

import { CoursesService } from '../../services/courses.service';

@Component({
  selector: 'app-course-form',
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.scss'],
})
export class CourseFormComponent implements OnInit {
  form = this._formBuilder.group({
    _id: [''],
    name: [''],
    category: [''],
  });

  constructor(
    private _formBuilder: NonNullableFormBuilder,
    private _coursesService: CoursesService,
    private _snackBar: MatSnackBar,
    private _location: Location,
    private _route: ActivatedRoute
  ) {}

  onSubmit() {
    this._coursesService.save(this.form.value).subscribe(
      response => this.onSucess(),
      error => this.onError()
    );
  }

  onError() {
    this._snackBar.open('Erro ao salvar o curso', '', { duration: 3000 });
  }

  onSucess() {
    this._snackBar.open('Curso criado com sucesso', '', { duration: 3000 });
    this.onCancel();
  }

  onCancel() {
    this._location.back();
  }

  ngOnInit(): void {
    const course: Course = this._route.snapshot.data['course'];
    this.form.setValue(course);
  }
}
