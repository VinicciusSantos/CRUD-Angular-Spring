import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

import { CoursesService } from './../services/courses.service';

@Component({
  selector: 'app-course-form',
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.scss'],
})
export class CourseFormComponent {
  form: FormGroup;

  constructor(
    private _formBuilder: FormBuilder,
    private _coursesService: CoursesService,
    private _snackBar: MatSnackBar
  ) {
    this.form = this._formBuilder.group({
      name: [null],
      category: [null],
    });
  }

  onSubmit() {
    this._coursesService.save(this.form.value).subscribe(
      data => console.log(data),
      error => this.onError()
    );
  }

  onError() {
    this._snackBar.open('Erro ao salvar o curso', '', { duration: 3000 });
  }

  onCancel() {}
}
