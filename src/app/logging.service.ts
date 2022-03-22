import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggingService {

  constructor() { }
  status: any = 'false';
  logStatusChanged(accountStatus: string) {
    status = 'true';
    return accountStatus = status;
  }
}
