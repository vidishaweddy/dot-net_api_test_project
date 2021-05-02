import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { User } from '../_models/user';
import { AccountService } from '../_services/account.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  registerMode = false;
  users: User[];

  constructor(private http: HttpClient, public accountService: AccountService) { }

  ngOnInit(): void {
    this.getUsers();
  }

  registerToggle() {
    this.registerMode = !this.registerMode;
  }

  getUsers() {
    this.http.get("https://localhost:5001/api/users").subscribe((response: User[]) => {
      this.users = response;
    });
  }

  cancelRegisterMode(event: boolean) {
    this.registerMode = event;
  }
}
