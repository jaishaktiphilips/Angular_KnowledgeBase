import {​​​​​​ NgModule }​​​​​​ from '@angular/core';
import {​​​​​​ RouterModule, Routes }​​​​​​ from '@angular/router';
import { HomeComponent } from './accounts/components/home-component/home.component';
import { LoginComponent } from './accounts/components/login-component/login-component.component';
import { SignupComponent } from './accounts/components/signup-component/signup-component.component';
import {MainCardsComponent} from './components/main-cards/main-cards.component'
const routes: Routes = [
    {path:"", redirectTo:'home',pathMatch:'full'},
    {path:"home",component:HomeComponent,children:[
        {path:"login",component:LoginComponent},
        {path:"signup",component:SignupComponent}
    ]},
    {path:"main-cards",component:MainCardsComponent,children:[
        {path:"calculator",loadChildren:()=>import('./calculator/calculator.module').then(m=>m.CalculatorModule )}
    ]}
];

@NgModule({​​​​​​  
    imports: [RouterModule.forRoot(routes)],  
    exports: [RouterModule]}​​​​​​)
    
export class AppRoutingModule {​​​​​​ }​​​​​​

