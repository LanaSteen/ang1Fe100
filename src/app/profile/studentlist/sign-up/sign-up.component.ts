import { Component} from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.scss'
})
export class SignUpComponent {
  student= {
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
  studentAdd={
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
  }
  addStudent(){
    this.studentAdd.name = this.student.name
    console.log(this.studentAdd.name);
      }
    }

