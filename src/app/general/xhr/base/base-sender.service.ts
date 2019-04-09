import {Injectable} from '@angular/core';
import {Observable, throwError } from 'rxjs';
import {catchError, } from 'rxjs/operators';
import {HttpErrorResponse} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BaseSenderService {

  protected httpSender(service: Observable<any>): Observable<any> {
    return service.pipe(
      catchError((err) => this.catchError(err))
    );
  }

  protected catchError(e: HttpErrorResponse) {
    alert(e.message);
    return throwError(new Error(e.message));
  }
}
