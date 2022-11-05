import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';

import { AppMaterialModule } from './../shared/app-material.module';
import { CoursesRoutingModule } from './courses-routing.module';
import { CoursesComponent } from './containers/courses/courses.component';
import { CoursesService } from './services/courses.service';
import { CourseFormComponent } from './containers/course-form/course-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CoursesListComponent } from './components/courses-list/courses-list.component';

@NgModule({
  declarations: [CoursesComponent, CourseFormComponent, CoursesListComponent],
  imports: [
    CommonModule,
    CoursesRoutingModule,
    AppMaterialModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [CoursesService],
})
export class CoursesModule {}
