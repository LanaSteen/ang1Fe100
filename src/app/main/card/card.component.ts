
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
 @Input() product!: {id: number; title: string; description: string; image: string;}
}