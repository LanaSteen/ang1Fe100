import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { StudentlistComponent } from "./studentlist/studentlist.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [CommonModule, FormsModule, StudentlistComponent],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.scss'
})
export class SignUpComponent {
  student = {
    name: "",
    age: null,
    grade: "",
    subjects: "",
    isEnrolled: false,
    address: {
      street: "",
      city: "",
      zip: ""
    }
  };

  studentList: any[] = [];

  addStudent() {
    this.studentList.push(structuredClone(this.student));
    console.log(this.studentList);
    this.resetStudent();
  }

  resetStudent() {
    this.student = {
      name: "",
      age: null,
      grade: "",
      subjects: "",
      isEnrolled: false,
      address: {
        street: "",
        city: "",
        zip: ""
      }
    };
  }
  deleteStudent(ind: number) {
    this.studentList.splice(ind, 1);
  }
}