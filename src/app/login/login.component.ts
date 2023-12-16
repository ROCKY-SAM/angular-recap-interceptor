import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {  Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
loginObject:any ={
  "EmailId": "",
  "Password": ""
};

  constructor(private http:HttpClient,private router:Router) { }

  ngOnInit(): void {
  }
  onLogin(){
    this.http.post('https://freeapi.miniprojectideas.com/api/User/Login',this.loginObject).subscribe((res:any) =>{
      if(res.result){
        this.router.navigateByUrl('/dashboard');
        localStorage.setItem('loginToken',res.data.token)
      }
    })
  }

}
