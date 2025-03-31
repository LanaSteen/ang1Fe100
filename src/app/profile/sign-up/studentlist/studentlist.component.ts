import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-studentlist',
  standalone: true,
  imports: [CommonModule, CommonModule],
  templateUrl: './studentlist.component.html',
  styleUrl: './studentlist.component.scss'
})
export class StudentlistComponent {
@Input() studentList: any[]=[];

@Output() deleteSt = new EventEmitter<number>()
@Output() editSt = new EventEmitter<number>()
deleteStudent(ind: number) {
  this.deleteSt.emit(ind);
}
editStudent(ind: number) {
  this.editSt.emit(ind);
}
}
