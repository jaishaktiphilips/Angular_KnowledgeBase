import { APP_BASE_HREF } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { LoginComponent } from './accounts/components/login-component/login-component.component';
import { SignupComponent } from './accounts/components/signup-component/signup-component.component';

import { AppComponent } from './components/app.component';
import { HomeComponent } from './accounts/components/home-component/home.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import { AppRoutingModule } from './app-routing.module';
import { MainCardsComponent } from './components/main-cards/main-cards.component';
import { AccountsService } from './services/accounts.service';
import { HttpClientModule } from '@angular/common/http';
import { RedTextColorDirective } from './directives/redtextColor.directive';
@NgModule({
  declarations: [
    AppComponent,LoginComponent,SignupComponent,HomeComponent, MainCardsComponent,RedTextColorDirective
  ],
  
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, 
    BrowserAnimationsModule,
    MatSliderModule,
    MatFormFieldModule,
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    HttpClientModule
  ],
  
  providers: [
    {provide:APP_BASE_HREF, useValue: '/'}
    ,AccountsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
