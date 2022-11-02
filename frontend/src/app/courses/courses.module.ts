import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AppMaterialModule } from './../shared/app-material.module';
import { CoursesRoutingModule } from './courses-routing.module';
import { CoursesComponent } from './courses/courses.component';
import { CoursesService } from './services/courses.service';

@NgModule({
  declarations: [CoursesComponent],
  imports: [CommonModule, CoursesRoutingModule, AppMaterialModule],
  providers: [CoursesService],
})
export class CoursesModule {}
