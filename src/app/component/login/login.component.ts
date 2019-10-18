import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/service/auth.service';
import { User } from 'src/app/modele/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router, private fb: FormBuilder, private authService: AuthService) { }

  login: string;
  password: string;
  private user: User;
  loginForm: FormGroup;
  showErrorMessageOnConnect = false;

  ngOnInit() {
    this.loginForm = this.fb.group({
      login: ['', [Validators.required, Validators.email]], // Validators.email
      password: ['', Validators.required]
    });
    this.authService.logout();
  }

  getErrorMessage() {
    return this.loginForm.get('login').hasError('required') ? 'Veuillez entrer une valeur' :
    this.loginForm.get('login').hasError('email') ? 'Ce n\'est pas un email valide' : '';
  }

  getErrorMessage2() {
    return 'Erreur de connexion : votre identifiant ou mot de passe erroné !';
  }

  onConnect() {
    if (this.loginForm.valid) {
      if (this.authService.login(this.loginForm.value)) {
        this.showErrorMessageOnConnect = false;
        localStorage.setItem('user', JSON.stringify({login : this.loginForm.get('login').value}));
      } else {
        this.showErrorMessageOnConnect = true;
        this.getErrorMessage2();
        console.log('Not correct credentials');
      }
    }
  }

}
