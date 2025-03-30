import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-studentlist',
  standalone: true,
  imports: [CommonModule, CommonModule],
  templateUrl: './studentlist.component.html',
  styleUrl: './studentlist.component.scss'
})
export class StudentlistComponent {
@Input() studentList: any[] = [];
}
