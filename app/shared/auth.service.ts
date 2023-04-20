import { Injectable } from '@angular/core';
import { Route, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router:Router) { }

  setToken(token: string) {
    localStorage.setItem("token", token)
  };

  getToken() {
    return localStorage.getItem("token");
  }

isLoggedIn(){
  if(localStorage.getItem("token")!= null)
  return true;
  else
  return false;
}

logout(){
  localStorage.clear();
  this.router.navigate;
}


  login(data:any):any {
    if (data.email == "admin@gmail.com" && data.password == "admin") {
      this.setToken("Aditya Gurav");
      return { status: "success", data: {name: "Aditya", email: "admin@gmail.com", usertype: "admin" } }
    }

    else if (data.email == "manager@gmail.com" && data.password =="admin"){
      this.setToken("Aaditya gurav");
      return{status:"success",data:{name:"manager", email:"manager@gmail.com",usertype:"manager"}}
    }
    else  {
      return { status: "failed" };
    }
  }
}
