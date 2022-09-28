import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']

})
export class AppComponent {
  title = 'pic-health-portal';

  constructor(private router: Router) {

  }
  // myComponent.component.thml
  btnClick():void {
          this.router.navigateByUrl('/user');
  };
}
