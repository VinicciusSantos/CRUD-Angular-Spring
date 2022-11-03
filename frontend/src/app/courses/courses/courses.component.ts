import { catchError, Observable, of } from 'rxjs';
import { CoursesService } from './../services/courses.service';
import { Component, OnInit } from '@angular/core';
import { Course } from '../models/course';
import { MatDialog } from '@angular/material/dialog';
import { ErrorDialogComponent } from 'src/app/shared/components/error-dialog/error-dialog.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss'],
})
export class CoursesComponent {
  courses$: Observable<Course[]>;
  displayedColumns: string[] = ['_id', 'name', 'category', 'actions'];

  constructor(
    private _coursesService: CoursesService,
    private _router: Router,
    public dialog: MatDialog
  ) {
    this.courses$ = this._coursesService.list().pipe(
      catchError(error => {
        this.onError('Erro ao carregar cursos.');
        return of([]);
      })
    );
  }

  onError(errorMsg: string) {
    this.dialog.open(ErrorDialogComponent, {
      data: errorMsg,
    });
  }

  onAdd() {
    console.log('onAdd');
    this._router.navigate(['courses/new']);
  }
}
