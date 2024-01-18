import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from 'src/app/service/auth-service.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  isAdmin: boolean = false;


  constructor(public auth: AuthServiceService) { }

  ngOnInit(): void {
    this.isAdmin = this.auth.isAdmin();
  }

  logout() {
    this.auth.logout();
  }





}
