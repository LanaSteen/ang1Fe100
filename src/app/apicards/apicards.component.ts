import { Component, OnInit} from '@angular/core';
import { User } from '../Models/user';
import { ApiUserCardComponent } from './api-user-card/api-user-card.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { UserService } from '../Services/user.service';





@Component({
  selector: 'app-api-cards',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule, ApiUserCardComponent],
  templateUrl: './apiCards.component.html',
  styleUrl: './apiCards.component.scss'
})
export class ApiCardsComponent implements OnInit{

 constructor(private httpUsers : UserService){}
  
 ngOnInit(){
  this.httpUsers.getAllUsers().subscribe( (resp : any) => {
    console.log(resp.data)
    this.displayUser = (resp.data)

 })
 }
 userArr: User[]=[]
 displayUser(arr : User[]){
  this.userArr = arr
 }

}
