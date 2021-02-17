import { HttpClient } from '@angular/common/http';
import { Token } from '@angular/compiler/src/ml_parser/lexer';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { SignLoginServiceService } from 'src/app/services/sign-login-service.service';
import { TokenServiceService } from 'src/app/services/token-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public form={
    email:null,
    password:null
  }

  public error = null;
  
  constructor(
    private service:SignLoginServiceService,
    private token:TokenServiceService,
    private router:Router,
    private auth:AuthService)
     { }

  onSubmit(){
    this.service.login(this.form)
    .subscribe(
        data=>this.handleResponce(data),
        error => this.handleError(error)
    ); 
  }

  handleResponce(data){
    this.token.handle(data.access_token);
    this.auth.changeAuthStatus(true);
    this.router.navigateByUrl('/employees');
  }
  
  handleError(error: { error: { error: null; }; }) {
    this.error = error.error.error;
  }

  ngOnInit(): void {
  }

}
