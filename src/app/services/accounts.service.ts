
import {HttpClient} from '@angular/common/http'
import { Injectable } from '@angular/core'

@Injectable()
export class AccountsService{

    constructor(private http:HttpClient){

    }

    validateCredentials(email:string,password:string){
        //make sure the param is same as the var in that class
        return this.http.post("https://localhost:55068/api/account/ValidateCredentials",{"email":email,"password":password})
    }

}