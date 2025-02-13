import { Component } from '@angular/core';
import { Observable } from 'rxjs'
import { UserComponent } from './user/user.component';

@Component({
  selector: 'app-root',
  imports: [UserComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-code-challenge';


  constructor(){
  }

}
