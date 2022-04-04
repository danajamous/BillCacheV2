import { Component, OnInit } from '@angular/core';
import { GetDataService } from '../get-data.service';
import { LocalStorageService } from '../local-storage.service';

interface Category {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-account-settings',
  templateUrl: './accountsettings.component.html',
  styleUrls: ['./accountsettings.component.css']
})
export class AccountsettingsComponent implements OnInit {
  post: any = '';

customername: string = '';
mobilenumber: string = '';
emailaddress: string = '';
dob: string = '';
country: string ='';

accountDetails = {customername: this.customername, mobilenumber: this.mobilenumber, emailaddress: this.emailaddress, 
  dob: this.dob, country: this.country};


  constructor(private getData: GetDataService, private localStorageService: LocalStorageService) { }


  ngOnInit(): void {
  }

  add(v: any) {
  }

  addPost(post: any) {
    this.getData.parentPost.push(post);
  }

  addAccountDetails(){
  this.accountDetails.customername = this.customername
  this.accountDetails.mobilenumber = this.mobilenumber;
  this.accountDetails.emailaddress = this.emailaddress;
  this.accountDetails.dob = this.dob;
  this.accountDetails.country = this.country;
  this.localStorageService.setItem("inputaccountdata",  JSON.stringify(this.accountDetails))
}
}