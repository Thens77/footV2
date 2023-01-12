import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable, tap } from 'rxjs';
import { LoginService } from '../auth/login.service';
import { UsersService } from '../entities/users/service/users.service';
import { Users } from '../entities/users/users.model';



@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  user : Users = new Users();
  constructor(private loginService : LoginService, private router : Router){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    
    return this.loginService.isLoggedIn$.pipe(
      tap((isLoggedIn) => {
        if(!isLoggedIn){
            this.router.navigate(['home']);
        }    
      }
      ),
      tap((role) => {
        if(localStorage.getItem("role")?.toLocaleUpperCase()!=="PROP") {
          role = false ;
        }
        if(localStorage.getItem("role")?.toLocaleUpperCase()==="PROP"){
          role = true ;
        }
        if( !role){
            this.router.navigate(['home']);
        }    
      }
      
      )
    );
  }
}


@Injectable({
  providedIn: 'root'
})
export class AuthGuard2 implements CanActivate {
  user : Users = new Users();
  constructor(private loginService : LoginService, private router : Router){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    
    return this.loginService.isLoggedIn$.pipe(
      tap((isLoggedIn) => {
        if(!isLoggedIn){
            this.router.navigate(['home']);
        }    
      }
      ),
      tap((role) => {
        if(localStorage.getItem("role")?.toLocaleUpperCase()!=="CLIENT") {
          role = false ;
        }
        if(localStorage.getItem("role")?.toLocaleUpperCase()==="CLIENT"){
          role = true ;
        }
        if( !role){
            this.router.navigate(['home']);
        }    
      }
      
      )
    );
  }
}