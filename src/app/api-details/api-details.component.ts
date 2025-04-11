import { Component} from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { User } from '../Models/user';
import { routes } from '../app.routes';
import { UserService } from '../Services/user.service';
// import { CommonFuncService } from '../Services/common-func.service';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './api-details.component.html',
  styleUrl: './api-details.component.scss'
})
export class ApiDetailsComponent {
  constructor(
    private rout : ActivatedRoute, 
    private api : UserService,
    // private commonFunc :CommonFuncService,
    private httpUsers : UserService
  ){
 this.rout.params.subscribe(data => this.getSingleUser(data['id']))

}
singleUser : any

getSingleUser(id: number) {
  this.api.getUserById(id).subscribe((resp: any) => {   
    this.singleUser = resp.data;
    // this.commonFunc.printinConsole("user info", JSON.stringify(this.singleUser));
  });
}


}
ngOnInit(){
  this.httpUsers.getAllUsers().subscribe( (resp : any) => {
  console.log("HELLO",resp.data)
  this.userArr = (resp.data)

 })
 }
 userArr: User[]=[]

}