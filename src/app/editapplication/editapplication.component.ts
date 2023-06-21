import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApplicationService } from '../service/application.service';
import { AuthService } from '../service/auth.service';
import { Application } from '../model/application.model';
import { FormBuilder, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-editapplication',
  templateUrl: './editapplication.component.html',
  styleUrls: ['./editapplication.component.css']
})
export class EditapplicationComponent implements OnInit {

  appName: any;
  currentapplication!:Application;
  data!:any;
  application_Name!: string;
  point_Of_Contact!:string;
  it_Owner!:string;
  sme!:string;
  business_Usage!: string;
  business_Owner!: string;
  production_Server!: string;
  test_Server!: string;
  dev_Server!: string;
  db_Production_Server!: string;
  db_Test_Server!: string;
  db_Dev_Server!: string; 
  

  constructor(

    private builder: FormBuilder,
    private service: AuthService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {

    this.appName = this.route.snapshot.params["applicationName"];
    this.putapplication(this.appName);
  
  }




  putapplication(application: string):void {
    this.service.getApplicationbyname(application).subscribe(result => {
      this.data = result;

      this.application_Name=this.data.application_Name;
      this.point_Of_Contact=this.data.point_Of_Contact;
      this.it_Owner=this.data.it_Owner;
      this.sme=this.data.sme;
      this.business_Usage= this.data.business_Usage,
      this.business_Owner= this.data.business_Owner,
      this.production_Server= this.data.production_Server,
      this.test_Server= this.data.test_Server,
      this.dev_Server= this.data.dev_Server,
      this.db_Production_Server= this.data.db_Production_Server,
      this.db_Test_Server= this.data.db_Test_Server,
      this.db_Dev_Server= this.data.db_Dev_Server
      this.currentapplication=this.data;

    })
  }
  newApp= this.builder.group({
    
    application_Name: this.builder.control(this.application_Name, Validators.required),
    point_Of_Contact: this.builder.control(this.point_Of_Contact, Validators.required),
    it_Owner: this.builder.control(this.it_Owner, Validators.required),
    sme: this.builder.control(this.sme, Validators.required),
    business_Usage: this.builder.control(this.business_Usage, Validators.required),
    business_Owner: this.builder.control(this.business_Owner, Validators.required),
    production_Server: this.builder.control(this.production_Server, Validators.required),
    test_Server: this.builder.control(this.test_Server, Validators.required),
    dev_Server: this.builder.control(this.dev_Server, Validators.required),
    db_Production_Server: this.builder.control(this.db_Production_Server, Validators.required),
    db_Test_Server: this.builder.control(this.db_Test_Server, Validators.required),
    db_Dev_Server: this.builder.control(this.db_Dev_Server, Validators.required)
  });
  updateApp(form:NgForm) {
    if(confirm('Are you sure to edit this application')){
     this.service.updateapplication(this.appName, form.value).subscribe(result => {
      console.log('updated');
      this.router.navigate(['application']);
      
    })
   
  }
    
  }

}
