import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { TokenServiceService } from 'src/app/services/token-service.service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {


  public loggedIn: boolean | undefined;
    constructor(
    private auth:AuthService,
    private router: Router,
    private token: TokenServiceService
  ) { }

  ngOnInit(): void {
    this.auth.authStatus.subscribe(
      value=>this.loggedIn=value
    );
  }

  logout(event : MouseEvent){
    event.preventDefault();
    this.auth.changeAuthStatus(false);
    this.token.remove();
    this.router.navigateByUrl('/login');


  }
}
