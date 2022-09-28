import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-signup-component',
  templateUrl: './signup-component.component.html',
  styleUrls: ['./signup-component.component.css']
})
export class SignupComponent implements OnInit {

  constructor() { }

  username:string="";
  password:string="";
  repassword:string="";
  email:string="";
  gender:string="";
  age:number=0;

  ngOnInit(): void {
  }

  onusernameEdit(username:string){
    this.username=username;
  }

  
  onpasswordEdit(password:string){
    this.password=password;
  }

  
  
  onrepasswordEdit(repassword:string){
    this.repassword=repassword;
  }
  
  
  onemailEdit(email:string){
    this.email=email;
  }
 /* onageEdit(age:string){
    this.age=parseInt(age);
  }
*/
  clear(){
    this.username="";
    this.password="";
    this.repassword="";
    this.email="";
    this.gender="";
    this.age=0;
  }

  onFormSubmit(formgrp:FormGroup){
    console.log(formgrp.valid);
  }
}
