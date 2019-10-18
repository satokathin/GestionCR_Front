import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isLoggedIn$: Observable<boolean>;

  constructor(private router: Router, private authService: AuthService) {}

  ngOnInit() {
    this.isLoggedIn$ = this.authService.isLoggedIn;
  }

  logout() {
    console.log('Tentative de déconnexion');
    this.authService.logout();
    localStorage.removeItem('user');
  }

  getLogin() {
    return JSON.parse(localStorage.getItem('user')).login;
  }
}
