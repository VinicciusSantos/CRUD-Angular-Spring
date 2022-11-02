import { Injectable } from '@angular/core';
import { Course } from '../models/course';

@Injectable({
  providedIn: 'root',
})
export class CoursesService {
  list(): Course[] {
    return [{ _id: '1', name: 'Angular', category: 'Front-End' }];
  }
}
