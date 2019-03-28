import { Injectable } from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class HeaderInterceptorService  implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    // Le traitement est déclenché si la requête sur l'API sample.com

    if (req.url.includes('sample.com')) {

      // Ajout du header Content-Type
// => Il est important de noter qu'une requête est immuable, vous devez la cloner
      const clone = req.clone({setHeaders: {'Content-Type': 'application/json'}});

      return next.handle(clone);
    }
    return next.handle(req);
  }
}
