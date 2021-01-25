import { AuthService } from './../../shared/service/auth/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  isCollapsed = false;
  
  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    console.log(localStorage.getItem('currentUser'));
  }

  logout() {
    this.authService.logout();
  }

}
