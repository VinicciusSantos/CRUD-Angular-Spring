import { Course } from './../models/course';
import { Injectable } from '@angular/core';
import {
  Router,
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot,
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { CoursesService } from '../services/courses.service';

@Injectable({
  providedIn: 'root',
})
export class CoursesResolver implements Resolve<Course> {
  constructor(private _coursesService: CoursesService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<Course> {
    if (route.params && route.params['id']) {
      return this._coursesService.loadById(route.params['id']);
    }
    return of({
      _id: '',
      name: '',
      category: '',
    });
  }
}
