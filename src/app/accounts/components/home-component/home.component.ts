import { Component } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { Router } from "@angular/router";
import { NgIf } from "@angular/common";

@Component({    
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls:['home.component.css']
})

export class HomeComponent{

    constructor(private router: Router){
    }
    prop:string="";
    goToPage(pageName:string){
      this.router.navigate([`${pageName}`]);
    }
    /*onTextBoxEdited(textValue:string){
      this.prop=textValue;
    }
    */
    onChangeValue(){
      let x= Math.random() * 100;
      this.prop=x.toString();
    }

    onFormSubmit(fromgroup:FormGroup){
      console.log(fromgroup.valid)
        }
    
}