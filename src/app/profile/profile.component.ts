import { Component } from '@angular/core';
import { SignUpComponent } from "./studentlist/sign-up/sign-up.component";
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [SignUpComponent, FormsModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent {
 
}
