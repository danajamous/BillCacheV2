import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GetDataService {
  parentPost:any[]=[];
  totalAmountToPay:number=0;
  constructor() { }
}
