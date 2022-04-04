import { Component, OnInit,Input } from '@angular/core';
import { GetDataService } from '../get-data.service';
import { BillerdropdownserviceService } from '../billerdropdownservice.service';
import { LocalStorageService } from '../local-storage.service';

@Component({
  selector: 'app-bill-summary',
  templateUrl: './bill-summary.component.html',
  styleUrls: ['./bill-summary.component.css']
})
export class BillSummaryComponent implements OnInit {
queryResult: any;
jsonstring : string = '';
jsondata : any;
  @Input () childPosts:any[]=[];

  billercategory: string[] = ["None","Telecommunication", "Education" , "Electricity", "Charity"];
   billername: string[] = ["None","T-Mobile", "ATT" , "George Mason University", "Virginia Tech",
   "Dominion Energy","Children Foundation","Senior Homes"];
  service: string[] = ["None","Postpaid", "Prepaid" , "Internet", "Student Balance",
  "Admin Fees","Energy Bill","Donation","Donation"]; 
  constructor(private getData:GetDataService,private billerdropdownservice: BillerdropdownserviceService,
  private localStorageService: LocalStorageService){
    this.childPosts =this.getData.parentPost;
   
     this.childPosts = this.billerdropdownservice.getBillerCategory();
  }

  ngOnInit(): void {
   
  this.queryResult = this.localStorageService.getItem("inputbilldata");
  this.jsonstring = this.cleanString(this.queryResult);
  this.jsondata = JSON.parse(this.jsonstring);
  //console.log(this.jsondata);
  

}
cleanString(str: string) {
    str = str.replace('"[', '[');
    str = str.replace(']"', ']');
  return str;
}

}

