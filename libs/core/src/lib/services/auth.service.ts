import { Injectable } from '@angular/core';

const  TOKEN = 'jwtToken'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }
  setToken(data:any){
    sessionStorage.setItem(TOKEN, data)
  }

  getToken() {
    return sessionStorage.getItem(TOKEN)
  }

  removeToken(){
    sessionStorage.removeItem(TOKEN);
  }
}
