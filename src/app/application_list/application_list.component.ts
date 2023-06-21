import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-application_list',
  templateUrl: './application_list.component.html',
  styleUrls: ['./application_list.component.css']
})
export class application_list {
  searchText!: '';
  activateRoute: any;
  

  constructor(private service: AuthService, private toastr: ToastrService, private router: Router) {

    
    this.assignrole();
  }
  Applicationlist: any;


  // accessdata: any;
  // haveedit = false;
  // haveadd = false;
  // havedelete = false;

  ngAfterViewInit(): void {

    this.Loadapplication_list();
  }
  viewApplication(application_Name: any) {
    this.activateRoute.snapshot.paramMap.get["application_Name"];

  }
  Loadapplication_list() {

    this.service.GetAllApplication().subscribe(res => {
      this.Applicationlist = res;


    });
  }
  // SetAccesspermission() {
  //   this.service.Getaccessbyrole(this.service.getrole(), 'application_list').subscribe(res => {
  //     this.accessdata = res;
  //     //console.log(this.accessdata);

  //   if(){
  //       this.haveadd=this.accessdata[0].haveadd;
  //       this.haveedit=this.accessdata[0].haveedit;
  //       this.havedelete=this.accessdata[0].havedelete;
  //     this.Loadapplication_list();
  //     }else{
  //       alert('you are not authorized to access.');
  //       this.router.navigate(['']);
  //    }

  //   });
  // }


  updateapplication_list(code: any) {

    if (true) {
      this.toastr.success('Success')
    } else {
      this.toastr.warning("You don't have access for Edit")
    }

  }
  removeapplication_list(code: any) {
    if (true) {
      this.toastr.success('Success')
    } else {
      this.toastr.warning("You don't have access for Delete")
    }
  }
  addApplication() {
    if (true) {
      this.toastr.success('Success')
    } else {
      this.toastr.warning("You don't have access for Create")
    }
  }
  deleteApplication(application_Name: any) {
    if(confirm('Are you sure to delete this application')){
      this.service.DeleteApplication(application_Name).subscribe((data) => {
     
        this.Loadapplication_list();
       
       });
   
       
    }
    else{
      this.router.navigate(['application']);
    }
    
  }
  

  role: any;
  assignrole() {
    this.role = this.service.getrole();
  }
}
