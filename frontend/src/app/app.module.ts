import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProfileComponent } from './components/profile/profile.component';
import { SignupComponent } from './components/signup/signup.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';

import{ FormsModule} from '@angular/forms'
import { HttpClientModule } from '@angular/common/http';
import {ToastrModule} from 'ngx-toastr'
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { CreateComponent } from './components/employees/create/create.component';
import { EditComponent } from './components/employees/edit/edit.component';
import { ListComponent } from './components/employees/list/list.component'

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    SignupComponent,
    NavbarComponent,
    LoginComponent,
    CreateComponent,
    EditComponent,
    ListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
