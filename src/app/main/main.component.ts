import { Component } from '@angular/core';
import { CardComponent } from "./card/card.component";

@Component({
  selector: 'app-main',
  imports: [CardComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss',
  standalone: true
})
export class MainComponent {
  product={
    id: 1,
    title: "Dota 2",
    description: "Free To Play",    
    image: "https://upload.wikimedia.org/wikipedia/ru/8/8e/%D0%9E%D0%B1%D0%BB%D0%BE%D0%B6%D0%BA%D0%B0_Dota_2.jpg"
    };
}
