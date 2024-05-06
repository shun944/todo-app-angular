import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GetUserInfoService {

  constructor() { }

  getUserId(): number {
    //this is a mock function
    return 1;
  }
}
