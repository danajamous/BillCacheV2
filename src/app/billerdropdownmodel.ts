export class BillerCategory {
    constructor(
      public id: number, 
      public billercategoryname: string) { }
  }
  
  export class BillerName {
    constructor(
      public id: number, 
      public billercategoryid: number, 
      public billername: string) { }
  }
  
  export class BillerService {
    constructor(
      public id: number, 
      public billernameid: number, 
      public billerservice: string) { }
  }