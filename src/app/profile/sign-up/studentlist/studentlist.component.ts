import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StCardComponent } from './st-card/st-card.component'
import { IStudent } from '../../../Models/student';


@Component({
  selector: 'app-studentlist',
  standalone: true,
  imports: [CommonModule, CommonModule, StCardComponent],
  templateUrl: './studentlist.component.html',
  styleUrl: './studentlist.component.scss'
})
export class StudentlistComponent {
@Input() studentList: IStudent[]=[];

@Output() deleteSt = new EventEmitter<number>()
@Output() editSt = new EventEmitter<number>()
deleteStudent(ind: number) {
  this.deleteSt.emit(ind);
}
editStudent(ind: number) {
  this.editSt.emit(ind);
}
}
