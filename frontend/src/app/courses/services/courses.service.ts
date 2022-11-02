import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Course } from '../models/course';
import { tap, take } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CoursesService {
  constructor(private _httpClient: HttpClient) {}

  private readonly API = '/assets/courses.json';

  list(): Observable<Course[]> {
    return this._httpClient.get<Course[]>(this.API).pipe(
      take(1),
      tap(res => console.log(res))
    );
  }
}
