import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IStudent } from '../../../../Models/student';



@Component({
  selector: 'app-st-card',
  standalone: true,
  imports: [],
  templateUrl: './st-card.component.html',
  styleUrl: './st-card.component.scss'
})
export class StCardComponent {

  @Input() student!: IStudent;
  @Input() ind!: number;

  @Output() delSt = new EventEmitter<number>();
  @Output() editSt = new EventEmitter<number>();

  deleteStudent(ind: number){
    this.delSt.emit(ind);
  }
  editStudent(ind: number){
    this.editSt.emit(ind);
  }
}
