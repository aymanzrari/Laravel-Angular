import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateComponent } from './components/employees/create/create.component';
import { EditComponent } from './components/employees/edit/edit.component';
import { ListComponent } from './components/employees/list/list.component';
import { LoginComponent } from './components/login/login.component';
import { ProfileComponent } from './components/profile/profile.component';
import { SignupComponent } from './components/signup/signup.component';
import { AfterLoginService } from './services/after-login.service';
import { BeforeLoginService } from './services/before-login.service';

const routes: Routes = [
  {
    path:'login',  
    component:LoginComponent,
    canActivate: [BeforeLoginService]
  },
  {
    path:'signup',  
    component:SignupComponent,
    canActivate: [BeforeLoginService]
  },
  // {
  //   path:'profile',  
  //   component:ProfileComponent,
  //   canActivate: [AfterLoginService]
  // },
  {
    path:'employees',  
    component: ListComponent,
    canActivate: [AfterLoginService]
  },
  {
    path:'employees/create',  
    component: CreateComponent,
    canActivate: [AfterLoginService]
  },
  {
    path:'employees/:id/edit',  
    component: EditComponent,
    canActivate: [AfterLoginService]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
