import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {application_list  } from './application_list/application_list.component';
import { AuthGuard } from './guard/auth.guard';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UserComponent } from './user/user.component';
import { ApplicationDetailsComponent } from './application-details/application-details.component';
import { AddApplicationComponent } from './add-application/add-application.component';
import { EditapplicationComponent } from './editapplication/editapplication.component';
const routes: Routes = [
 {component:LoginComponent,path:'login'},
 {component:RegisterComponent,path:'register'},
 {component:HomeComponent,path:'',canActivate:[AuthGuard]},
 {component:UserComponent,path:'user',canActivate:[AuthGuard]},
 {component:AddApplicationComponent,path:'addApplication',canActivate:[AuthGuard]},
 {component:application_list,path:'application',canActivate:[AuthGuard]},
 {component:ApplicationDetailsComponent,path:'application/:application_Name',canActivate:[AuthGuard]},
{component:EditapplicationComponent,path:'application/edit/:applicationName',canActivate:[AuthGuard]},
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
