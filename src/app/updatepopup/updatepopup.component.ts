import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms'
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../service/auth.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-updatepopup',
  templateUrl: './updatepopup.component.html',
  styleUrls: ['./updatepopup.component.css']
})
export class UpdatepopupComponent implements OnInit {

  constructor(private builder: FormBuilder, private service: AuthService, private toastr: ToastrService,
    private dialogref: MatDialogRef<UpdatepopupComponent>, @Inject(MAT_DIALOG_DATA) public data: any) {

    
    
    

  }
  ngOnInit(): void {
    if (this.data.usercode != '' && this.data.usercode != null) {
      this.loaduserdata(this.data.usercode);
    }
  }
  
  editdata: any;

  registerform = this.builder.group({
    user_fullname: this.builder.control(''),
    user_Nid: this.builder.control(''),
    user_password: this.builder.control(''),
    
    user_role: this.builder.control('', Validators.required),
    user_isactive: this.builder.control(false)
  });

  loaduserdata(code: any) {
    this.service.GetUserbyCode(code).subscribe(res => {
      this.editdata = res;
      console.log(this.editdata);
      this.registerform.setValue({
        user_fullname: this.editdata.user_fullname, user_Nid: this.editdata.user_Nid,
        user_password: this.editdata.user_password, user_role: this.editdata.user_role,  user_isactive: this.editdata.user_isactive
      });
    });
  }
  UpdateUser() {
    console.log(this.registerform.value);
    this.service.updateuser(this.registerform.value.user_Nid, this.registerform.value).subscribe(res => {
      this.toastr.success('Updated successfully.');
      this.dialogref.close();
    });
  }

}
