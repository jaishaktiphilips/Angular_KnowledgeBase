import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router} from '@angular/router';
import { AccountsService } from 'src/app/services/accounts.service';

@Component({
  selector: 'app-login-component',
  templateUrl: './login-component.component.html',
  styleUrls: ['./login-component.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private routerService:Router,private accService:AccountsService) {

   }

  ngOnInit(): void {
  }
  id:string="";
  email:string="";
  username:string="";
  password:string="";

  onEmailorusernameEdit(id:string){
      this.id = id;
  }

  onpasswordEdit(password:string){
    this.password = password;
  }

  clear(){
    this.id = "";
    this.password = "";
    this.username = "";
  }

  Login(){
    this.accService.validateCredentials("tom","tom@123").subscribe(
      (result)=>{console.log(result);},//success callback
      (error)=>{console.log(error);},//error call back
      ()=>{console.log("request is completed")}//completion call back
      );
    
    //this.username = this.id;
    this.routerService.navigate(['/main-cards']);
  }

  

}

