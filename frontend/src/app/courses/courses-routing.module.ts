import { CourseFormComponent } from './containers/course-form/course-form.component';
import { CoursesComponent } from './containers/courses/courses.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoursesResolver } from './guards/courses.resolver';

const routes: Routes = [
  { path: '', component: CoursesComponent },
  {
    path: 'new',
    component: CourseFormComponent,
    resolve: { course: CoursesResolver },
  },
  {
    path: 'edit/:id',
    component: CourseFormComponent,
    resolve: { course: CoursesResolver },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CoursesRoutingModule {}
