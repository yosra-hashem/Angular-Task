import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Router } from '@angular/router';
import { LoginService } from 'src/app/Services/login.service';


@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent {

  constructor(private loginService: LoginService, private router: Router) {
  }


  accountForm = new FormGroup({
    username: new FormControl("", Validators.required),
    password: new FormControl("", Validators.required),
  })

  get username(){
    return this.accountForm.get("username");
  }

  get password(){
    return this.accountForm.get("password");
  }

  signIn() {
    // console.log(this.accountForm.value);
    let user: any = this.accountForm.value
    this.loginService.login(user).subscribe(
      (response) => {
        console.log('Login succeeded', response);
        localStorage.setItem("token", response.token)
        this.router.navigate(['/home']);

        // Do something with the response
      },
      (error) => {
        alert("Login failed, please make sure of the username and password")
        this.accountForm.reset();
      // Do something with the error
    });
  }
}
