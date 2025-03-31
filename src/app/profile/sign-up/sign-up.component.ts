import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { StudentlistComponent } from "./studentlist/studentlist.component";
import { CommonModule } from '@angular/common';
import { IStudent } from '../../Models/student';

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [CommonModule, FormsModule, StudentlistComponent],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.scss'
})
export class SignUpComponent {

  student : IStudent ={
    name: "",
    age: null,
    grade: "",
    subjects: "",
    isEnrolled: false,
    address: {
      street: "",
      city: "",
      zip: null
    }
  }
  studentList: IStudent[] = [];
  save(form: NgForm){
    if(form.valid){
      this.studentList.push({...this.student,
        address:{...this.student.address}
      })
      console.log(this.studentList)
    }
    form.resetForm();
  }
  deleteStudent(ind: number) {
    this.studentList.splice(ind, 1);
  }
  editStudent(ind: number) {
    this.student = this.studentList[ind];
    this.studentList.splice(ind, 1)
  }
  };