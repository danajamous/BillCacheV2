import { Component, OnInit } from '@angular/core';
import { GetDataService } from '../get-data.service';
import { BillerCategory } from '../billerdropdownmodel';
import { BillerName } from '../billerdropdownmodel'; 
import { BillerService } from '../billerdropdownmodel'; 
import { BillerdropdownserviceService } from '../billerdropdownservice.service';
import { LocalStorageService } from '../local-storage.service';

interface Category {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-paynewbill',
  templateUrl: './paynewbill.component.html',
  styleUrls: ['./paynewbill.component.css']
})
export class PaynewbillComponent implements OnInit {
  post: any = '';
  //parentPost:any[]=[];
 // selectedBillCategory: BillerCategory1 = { id: 2, billercategoryname: 'Brazil' }
 selectedbillerCategory: BillerCategory = new BillerCategory(2, 'Brazil');
  billerCategories: BillerCategory [] | undefined;
  billerNames: BillerName[] | undefined;
billerServices: BillerService[] | undefined;

billcategory: string = '';
billername: string = '';
servicename: string = '';
billingnumber: string = '';

billDetails = {billcategory: this.billcategory, billername: this.billername, servicename: this.servicename, 
billingnumber: this.billingnumber};


  constructor(private getData: GetDataService, private billerdropdownservice: BillerdropdownserviceService, private localStorageService: LocalStorageService) { }


  ngOnInit(): void {
    this.billerCategories = this.billerdropdownservice.getBillerCategory();
    this.onSelect(this.selectedbillerCategory.id);
  }

  onSelect(billercategoryid:number) {
    this.billerNames = this.billerdropdownservice.getBillerName().filter((item) => item.billercategoryid == billercategoryid);

  }

    onSelectBiller(billernameid:number) {
    this.billerServices = this.billerdropdownservice.getServiceName().filter((item) => item.billernameid == billernameid);
  }

  add(v: any) {
   // console.log( this.billingNumber);
    //this.getData.parentPost.push(this.billingNumber);
    
    //this.getData.parentPost.push(v);
   
    

  }

  addPost(post: any) {
    //console.log(post);
    this.getData.parentPost.push(post);
    //this.getData.parentPost.push('Billing number &nbsp;&nbsp;'+this.billingNumber);
   // this.getData.parentPost.forEach(entry => {
      //  console.log(entry);
   // })
  }

  addBillingDetails(){
  this.billDetails.billcategory = this.billcategory
  this.billDetails.billername = this.billername;
  this.billDetails.servicename = this.servicename;
  this.billDetails.billingnumber = this.billingnumber;
  this.localStorageService.setItem("inputbilldata",  JSON.stringify(this.billDetails))
}
}