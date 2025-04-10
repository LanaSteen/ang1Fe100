import { Component, Input } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  logo = 'Steam';
  constructor(private rout : Router) {
    console.log('HeaderComponent');
  }
  api(){
    this.rout.navigateByUrl("/apicards")
  }
}
