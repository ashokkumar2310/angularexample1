import { Component } from '@angular/core';
import { AuthService } from '../service/auth.service'
interface Item {
  name: string;
  description: string;
  }
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor(private service: AuthService ) {
    this.assignrole();
  }
  role:any;
  assignrole() {
    this.role=this.service.getrole();
  }
  
}