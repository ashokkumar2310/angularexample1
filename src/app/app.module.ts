import { NgModule, importProvidersFrom } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from 'src/material.module';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { UpdatepopupComponent } from './updatepopup/updatepopup.component';
import { application_list } from './application_list/application_list.component';
import { CalendarModule } from '@syncfusion/ej2-angular-calendars';
import { FormsModule } from '@angular/forms';
import { SearchPipe } from './search.pipe';
import { AddApplicationComponent } from './add-application/add-application.component';
import { EditapplicationComponent } from './editapplication/editapplication.component';
import { ShiftrotationComponent } from './shiftrotation/shiftrotation.component';


@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    HomeComponent,
    UserComponent,
    UpdatepopupComponent,
    application_list,
    
    SearchPipe,
         AddApplicationComponent,
         EditapplicationComponent,
         ShiftrotationComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MaterialModule,
    HttpClientModule,
    CalendarModule,
    ToastrModule.forRoot(),
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
