
import { Component, Input } from '@angular/core';
import { ButtonComponent } from '../button/button.component';


@Component({
  selector: 'app-card',
  imports: [ButtonComponent],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
  standalone: true
})
export class CardComponent {
  @Input() title: string = 'Dota 2';
  @Input() description: string = 'Free To Play';
  @Input() image?: string = "https://upload.wikimedia.org/wikipedia/ru/8/8e/%D0%9E%D0%B1%D0%BB%D0%BE%D0%B6%D0%BA%D0%B0_Dota_2.jpg";
}