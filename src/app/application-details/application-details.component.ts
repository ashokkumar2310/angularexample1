import { Component, Input, OnInit } from '@angular/core';
import { ApplicationService } from 'src/app/service/application.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Application } from 'src/app/model/application.model';

@Component({
  selector: 'app-application-details',
  templateUrl: './application-details.component.html',
  styleUrls: ['./application-details.component.css']
})
export class ApplicationDetailsComponent implements OnInit {
[x: string]: any;

  @Input() viewMode = false;

  @Input() currentApplication: Application = {
    application_Name: '',
    point_Of_Contact: '',
    it_Owner: '',
    sme: '',
    business_Usage: '',
    business_Owner: '',
    production_Server: '',
    test_Server: '',
    dev_Server: '',
    db_Production_Server: '',
    db_Test_Server: '',
    db_Dev_Server: ''
  };
  
  message = '';
  
  

  constructor(
    private applicationService: ApplicationService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    if (!this.viewMode) {
      this.message = '';
      this.getApplication(this.route.snapshot.params["application_Name"]);
    
    }
  }

  getApplication(application_Name: string): void {
    this.applicationService.get(application_Name)
      .subscribe({
        next: (data) => {
          this.currentApplication = data;
          const josn=JSON.stringify(data);
          console.log(josn);
        
          
        },
        error: (e) => console.error(e)
      });
  }

  updatePublished(status: boolean): void {
    const data = {
      application_Name: this.currentApplication.application_Name,
      point_Of_Contact: this.currentApplication.point_Of_Contact,
      it_Owner: this.currentApplication.it_Owner,
      sME: this.currentApplication.sme,
      business_Usage: this.currentApplication.business_Usage,
      business_Owner: this.currentApplication.business_Owner,
      production_Server: this.currentApplication.production_Server,
      test_Server: this.currentApplication.test_Server,
      dev_Server: this.currentApplication.dev_Server,
      db_Production_Server: this.currentApplication.db_Production_Server,
      db_Test_Server: this.currentApplication.db_Test_Server,
      db_Dev_Server: this.currentApplication.db_Dev_Server
     
    };

    this.message = '';

    this.applicationService.update(this.currentApplication.application_Name, data)
      .subscribe({
        next: (res) => {
          console.log(res);
          
          this.message = res.message ? res.message : 'The Application was updated successfully!';
        },
        error: (e) => console.error(e)
      });
  }

  updateApplication(): void {
    this.message = '';

    this.applicationService.update(this.currentApplication.application_Name, this.currentApplication)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.message = res.message ? res.message : 'This application was updated successfully!';
        },
        error: (e) => console.error(e)
      });
  }

  deleteApplication(): void {
    this.applicationService.delete(this.currentApplication.application_Name)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.router.navigate(['/application']);
        },
        error: (e) => console.error(e)
      });
  }
  aso:any='tr';
  ash:any='fal';
  asho:any='fal';
  ng1(){
    this.aso="tr";
    this.ash="fal";
    this.asho="fal";
  }
  ng2(){
    this.aso="fal";
    this.ash="tr";
    this.asho="fal";
  }
  ng3(){
    this.aso="fal";
    this.ash="fal";
    this.asho="tr";
  }
 
}