import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { User } from '../core/models/user-list.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  users: User[] = [];
  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    this.loadUsers();
  }

  loadUsers(){
    this.http.get('https://freeapi.miniprojectideas.com/api/User/GetAllUsers').subscribe((response:any)=>{
    this.users = response.data;
    });
  }
}
