import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { SignLoginServiceService } from 'src/app/services/sign-login-service.service';
import { TokenServiceService } from 'src/app/services/token-service.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  public form={
    email:null,
    name:null,
    password:null,
    password_confirmation:null
  };

  public error = [];

  constructor(
    private service:SignLoginServiceService,
    private token:TokenServiceService,
    private router:Router,
    private auth:AuthService) { }

  onSubmit(){
    this.service.signup(this.form).subscribe(
      data=>this.handleResponce(data),
      error => this.handleError(error)
    ); 
  }

  handleResponce(data){
    this.token.handle(data.access_token);
    this.auth.changeAuthStatus(true);
    this.router.navigateByUrl('/profile');
  }

  handleError(error) {
    this.error = error.error.errors;
  }

  ngOnInit(): void {
  }
}
