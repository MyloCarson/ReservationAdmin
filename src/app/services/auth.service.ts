import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private isLoggedIn = false;

  redirectUrl: string;

  constructor(private router: Router) { }

  login() {
    this.isLoggedIn = true;
    this.setIsLoggedIn(true);
  }

  logout() {
    this.isLoggedIn = false;
    this.setIsLoggedIn(false);
    // sessionStorage.clear();
    this.router.navigate(['/login']);

  }

  private setIsLoggedIn(b: boolean) {
    sessionStorage.setItem(LOGGED_IN, this.isLoggedIn.toString());
  }

  public getIsLoggedIn(): boolean {
    if (sessionStorage.getItem(LOGGED_IN) !== 'true' ) {
      return false;
    } else {
      return true;
    }
  }
}
const LOGGED_IN = 'logged_in';

