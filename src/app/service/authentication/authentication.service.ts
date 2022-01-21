import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { SignInData } from 'src/app/model/signInData';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private readonly userData: SignInData = new SignInData('tomislav2806@gmail.com','angular123');
  isAuthenticated = false;

  constructor(private router: Router) { }

  authenticate(signInData: SignInData): boolean {
    if(this.checkCredentials(signInData)){
      this.isAuthenticated = true;
      this.router.navigate(['todo']);
      return true;
    }
    this.isAuthenticated = false;
    return false;

  }

  private checkCredentials(signInData: SignInData): boolean {
    return this.checkLogin(signInData.getLogin()) && this.checkPassword(signInData.getPassword());

  }

  private checkLogin(login: string): boolean {
    return login === this.userData.getLogin();


  }

  private checkPassword(password:string): boolean {

    return password === this.userData.getPassword();


  }

  logout() {
    this.isAuthenticated = false;
    this.router.navigate(['']);
  }

  getIsAuthenticated(): boolean {
    return this.isAuthenticated;
  }
}
