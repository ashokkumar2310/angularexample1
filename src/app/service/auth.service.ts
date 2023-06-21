import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Application } from '../model/application.model';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { 

  }
  apiurl='http://localhost:3000/user';

  RegisterUser(inputdata:any){
    return this.http.post('http://localhost:8080/newuser',inputdata);
  }
  GetUserbyCode(id:any){
    return this.http.get('http://localhost:8080/Admin/users/'+id);
  }
  Getall(){
    return this.http.get('http://localhost:8080/Admin/users');
  }
  updateuser(id:any,inputdata:any){
    return this.http.put('http://localhost:8080/Admin/users/'+id,inputdata);
  }
  getuserrole(){
    return this.http.get('http://localhost:3000/role');
  }
  isloggedin(){
    return sessionStorage.getItem('username')!=null;
  }
  getrole(){
    return sessionStorage.getItem('role')!=null?sessionStorage.getItem('role')?.toString():'';
  }
  AddApplication(inputdata:any){
    return this.http.post('http://localhost:8080/Admin/addapplication',inputdata)
  }
  GetAllApplication(){
    return this.http.get('http://localhost:8080/Admin/allApplication');
  }
  getApplicationbyname(applicationName:any):Observable<Application> {
    console.log(applicationName);
    return this.http.get<Application>('http://localhost:8080/Admin/allApplication/'+applicationName);
  }
  DeleteApplication(applicationName:any){
   
    return this.http.delete('http://localhost:8080/Admin/allApplication/'+applicationName);
  }
  Getaccessbyrole(role:any,menu:any){
    return this.http.get('http://localhost:3000/roleaccess?role='+role+'&menu='+menu)
  }
  updateapplication(applicationName:any,inputdata:any){
    return this.http.put('http://localhost:8080/Admin/allApplication/'+applicationName,inputdata)
  }
}
