import { Component, OnInit } from '@angular/core';
import { User } from '../_models/user';
import { AccountService } from '../_services/account.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  model: any = {};
  user : User;

  constructor(public accountService: AccountService) { }

  ngOnInit(): void {
    this.accountService.currentUser$.subscribe(user => this.user = user);
  }

  login() {
    this.accountService.login(this.model).subscribe(response => {}, error => {
      console.log(error);
    })
  }

  logout() {
    this.accountService.logout();
  }
}
