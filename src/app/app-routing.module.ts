import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SavedBillsComponent } from './saved-bills/saved-bills.component';
import { PaynewbillComponent } from './paynewbill/paynewbill.component';
import { PaymenthistoryComponent } from './paymenthistory/paymenthistory.component';
import { BillSummaryComponent } from './bill-summary/bill-summary.component';
import { AccountsettingsComponent } from './account-settings/accountsettings.component';
import { SavedpaymentmethodsComponent } from './saved-payment-methods/savedpaymentmethods.component';
import { PaymentConfirmationComponent } from './payment-confirmation/payment-confirmation.component';

const routes: Routes = [
  {path:'',redirectTo:'savedBills', pathMatch: 'full' },
  {path:'savedBills',component:SavedBillsComponent},
  {path:'paynewBills',component:PaynewbillComponent},
   {path:'paymentHistory',component:PaymenthistoryComponent},
   {path:'billSummary',component:BillSummaryComponent},
   {path:'accountSettings',component:AccountsettingsComponent},
   {path:'savedPaymentMethod', component:SavedpaymentmethodsComponent},
   {path:'paymentConfirmation', component:PaymentConfirmationComponent}
   
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
