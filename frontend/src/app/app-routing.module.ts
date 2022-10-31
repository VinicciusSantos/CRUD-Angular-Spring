import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

export const mainRoutes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'courses' },
  {
    path: 'courses',
    loadChildren: () =>
      import('./courses/courses.module').then(m => m.CoursesModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(mainRoutes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
