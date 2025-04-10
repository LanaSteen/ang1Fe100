import { Component} from '@angular/core';
import { IUser } from '../Models/user';
import { ApiService } from '../Services/api.service';
import { CommonModule } from '@angular/common';



@Component({
  selector: 'app-api-cards',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './apiCards.component.html',
  styleUrl: './apiCards.component.scss'
})
export class ApiCardsComponent{

 constructor(private httpUsers : ApiService){}
  
 ngOnInit(){
  this.httpUsers.getAllUsers().subscribe( (resp : any) => console.log(resp.data))
 }
}
