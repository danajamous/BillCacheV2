import { Injectable } from '@angular/core';
import { BillerCategory } from './billerdropdownmodel';
import { BillerName } from './billerdropdownmodel';
import { BillerService } from './billerdropdownmodel';

@Injectable({
  providedIn: 'root'
})
export class BillerdropdownserviceService {

  getBillerCategory() {
    return [
     new BillerCategory(1, 'Telecommunication' ),
     new BillerCategory(2, 'Education' ),
      new BillerCategory(3, 'Electricity' ),
       new BillerCategory(4, 'Charity' ),
    ];
  }
  
  getBillerName() {
   return [
     new BillerName(1, 1, 'T-Mobile' ),
     new BillerName(2, 1, 'ATT' ),
     new BillerName(3, 2, 'George Mason University'),
     new BillerName(4, 2, 'Virginia Tech'),
     new BillerName(5, 3, 'Dominion Energy' ),
     new BillerName(6, 4, 'Children Foundation'),
     new BillerName(7, 4, 'Senior Homes' )
    ];
  }

    getServiceName() {
   return [
     new BillerService(1, 1, 'Postpaid' ),
     new BillerService(2, 1, 'Prepaid' ),
     new BillerService(3, 2, 'Internet'),
     new BillerService(4, 3, 'Student Balance'),
     new BillerService(5, 4, 'Admin Fees' ),
     new BillerService(6, 5, 'Energy Bill'),
     new BillerService(7, 6, 'Donation' ),
      new BillerService(8, 7, 'Donation' )
    ];
  }

}