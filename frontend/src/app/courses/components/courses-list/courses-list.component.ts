import { Course } from '../../models/course';
import { EventEmitter, Component, Input, OnInit, Output } from '@angular/core';
@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.scss'],
})
export class CoursesListComponent {
  @Input() courses: Course[] = [];
  @Output() add = new EventEmitter(false);

  readonly displayedColumns: string[] = ['_id', 'name', 'category', 'actions'];

  onAdd() {
    this.add.emit(true);
  }
}
