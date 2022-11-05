import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { NonNullableFormBuilder } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

import { CoursesService } from './../services/courses.service';

@Component({
  selector: 'app-course-form',
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.scss'],
})
export class CourseFormComponent {
  form = this._formBuilder.group({
    name: [''],
    category: [''],
  });

  constructor(
    private _formBuilder: NonNullableFormBuilder,
    private _coursesService: CoursesService,
    private _snackBar: MatSnackBar,
    private _location: Location
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
}
