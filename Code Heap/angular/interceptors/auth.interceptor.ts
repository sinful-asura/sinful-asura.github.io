//@ts-nocheck  <<< Disable typescript checking for this file as it is only a template
//If you don't see a red text below in vscode, install extension 'Better comments'
/**
 * ! IMPORTANT ! 
 * ! Remove this comment and the comment with '@ts-nocheck' above
 * ! when using this file in real application !!!
 */
import { environment } from '@environments/environment';
import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpClient,
  HttpHeaders
} from '@angular/common/http';
import { catchError, Observable, Subscription, throwError, switchMap } from 'rxjs';
import { LoginService } from './login.service';

//Configure these to match your API's request and response layout
type AuthRefreshRequest = {
    refresh_token: string
}
type AuthRefreshResponse = {
    access_token: string
}

/**
 * * Configure AuthRefreshRequest and AuthRefreshResponse types for this interceptor to work properly.
 * ! Don't forget to add interceptor to your module providers!
 * @requires providers: [..., {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true}]
 * 
 * ! This interceptor relies on two parameters in sessionStorage;
 * @param access_token
 * @param refresh_token
 * ! Be sure to add these to your 
 */
@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  subs: Subscription[] = [];


  constructor(
    private http: HttpClient,
    private login: LoginService
  ) {}

  ngOnDestroy() {
    if (this.subs) {
      for (let sub of this.subs) {
        if (sub) sub.unsubscribe();
      }
    }
  }

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    
    if (request.url.indexOf(environment.api_url + 'auth/refresh') !== -1) {
      return next.handle(request).pipe(
        catchError((err: any) => {
          if (err.status === 401 || err.status === 403) {
            this.login.logout();
            return throwError(()=> new Error('Session expired! Logging out...'));
          }
          return throwError(()=> err);
        })
        );
      }
    
      //Add requests
    request = request.clone(this.secure());

    if(request.url.indexOf(environment.api_url + 'login') !== -1){
      request = request.clone({
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        })
      })
    }

    return next.handle(request).pipe(
      catchError((err) => {
        if (err.status === 401 || err.status === 403) {
          return this.requestAccessToken().pipe(
            switchMap((authResponse: AuthRefreshResponse) => {
              sessionStorage.setItem('access_token', authResponse.access_token);
              request = request.clone(this.secure())
              return next
                .handle(
                  request.clone(this.secure())
                )
                .pipe(
                  catchError((err: any) => {
                    if (err.status === 401 || err.status === 403) {
                      this.login.logout();
                      return throwError(()=>new Error('Session expired! Logging out...'));
                    }
                    return throwError(() => err);
                  })
                );
            })
          );
        }
        const error = err.message || err.statusText;
        return throwError(() => error);
      })
    );
  }

  
  requestAccessToken(): Observable<any> {
    const refreshToken: AuthRefreshRequest = {
      refresh_token: sessionStorage.getItem('refresh_token') ?? "NO_TOKEN"
    }
    return this.http.post<AuthRefreshResponse>(
      environment.api_url + 'auth/refresh',
      {
        ...refreshToken
      }
    );
  }

  secure() {
    return {
      headers: new HttpHeaders({
      'Authorization': 'Bearer ' + (sessionStorage.getItem('access_token') ?? 'NO_TOKEN'),
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    })
  }
  }
}
