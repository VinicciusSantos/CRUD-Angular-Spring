import { CourseFormComponent } from './containers/course-form/course-form.component';
import { CoursesComponent } from './containers/courses/courses.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: CoursesComponent },
  { path: 'new', component: CourseFormComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CoursesRoutingModule {}
