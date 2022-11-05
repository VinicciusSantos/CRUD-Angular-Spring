import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, first, Observable, take, tap } from 'rxjs';

import { Course } from '../models/course';

@Injectable({
  providedIn: 'root',
})
export class CoursesService {
  constructor(private _httpClient: HttpClient) {}

  private readonly API = 'http://localhost:3000/api/courses';

  list(): Observable<Course[]> {
    return this._httpClient.get<Course[]>(this.API).pipe(
      take(1),
      delay(500),
      tap(res => console.log(res))
    );
  }

  save(record: Course) {
    console.log(record);
    return this._httpClient.post<Course>(this.API, record).pipe(first());
  }
}
