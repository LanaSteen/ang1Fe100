import { Component, Input } from '@angular/core';
import { User } from '../../Models/user';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-api-user-card',
  imports: [RouterModule],
  templateUrl: './api-user-card.component.html',
  styleUrl: './api-user-card.component.scss'
})
export class ApiUserCardComponent {
  @Input() userArr!: User;
}

