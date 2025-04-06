import { Component } from '@angular/core';
import { SignUpComponent } from "./sign-up/sign-up.component";
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [SignUpComponent, FormsModule,RouterModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent {
 
}
