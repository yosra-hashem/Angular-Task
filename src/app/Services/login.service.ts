import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { Iuser } from '../Models/iuser';
import { HttpHeaders } from '@angular/common/http';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private url = environment.APIURL + "/login";
  private isloggedSubject: BehaviorSubject<boolean>;
  

  constructor(private httpClient: HttpClient) {
    console.log(this.url)
    this.isloggedSubject=new BehaviorSubject<boolean> (this.isUserLogged);
  }
  
  // login(user: ILocalUser): {
  //   let some_user = this.httpClient.post<Iuser>(this.url, JSON.stringify(user)  // }
  login(local_user: any) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
      })
    };
    return this.httpClient.post<Iuser>(this.url, JSON.stringify(local_user), httpOptions)
  }

  logout()
  {
    localStorage.removeItem("token");
    this.isloggedSubject.next(false);
  }


  get isUserLogged(): boolean
  {
    return  (localStorage.getItem('token'))? true: false
  }

  getloggedStatus(): Observable<boolean>
  {
    return this.isloggedSubject.asObservable();
  }

}
