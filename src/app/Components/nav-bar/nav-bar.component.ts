import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/Services/login.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {

  constructor(private router: Router, private loginservice: LoginService) { }
  
  get isLogged() {
    return this.loginservice.isUserLogged
  }

  logout (){
    localStorage.removeItem("token")
    this.router.navigate(['/login'])
  }
}
