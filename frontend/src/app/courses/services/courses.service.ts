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

  loadById(id: string): Observable<Course> {
    return this._httpClient.get<Course>(`${this.API}/${id}`).pipe(first());
  }

  save(record: Partial<Course>) {
    if (record._id) return this.update(record);
    return this.create(record);
  }

  private create(record: Partial<Course>) {
    return this._httpClient.post<Course>(this.API, record).pipe(first());
  }

  private update(record: Partial<Course>) {
    return this._httpClient
      .put<Course>(`${this.API}/${record._id}`, record)
      .pipe(first());
  }
}
