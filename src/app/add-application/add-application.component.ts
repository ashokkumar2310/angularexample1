import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Application } from '../model/application.model';
@Component({
  selector: 'app-add-application',
  templateUrl: './add-application.component.html',
  styleUrls: ['./add-application.component.css']
})
export class AddApplicationComponent {
  addApplication:Application[] =[];
  constructor(private builder: FormBuilder, private service: AuthService, private router: Router,
    private toastr: ToastrService) {

  }
  
  newApp= this.builder.group({
    application_Name: this.builder.control('', Validators.required),
    point_Of_Contact: this.builder.control('', Validators.required),
    it_Owner: this.builder.control('', Validators.required),
    sme: this.builder.control('', Validators.required),
    business_Usage: this.builder.control('', Validators.required),
    business_Owner: this.builder.control('', Validators.required),
    production_Server: this.builder.control('', Validators.required),
    test_Server: this.builder.control('', Validators.required),
    dev_Server: this.builder.control('', Validators.required),
    db_Production_Server: this.builder.control('', Validators.required),
    db_Test_Server: this.builder.control('', Validators.required),
    db_Dev_Server: this.builder.control('', Validators.required)
  });
  
addApp(){
 
  this.service.AddApplication(this.newApp.value).subscribe(result => {
    alert(this.newApp.value.application_Name+' Application Added successfully.')
    this.router.navigate(['application']);
    
})

}
}
