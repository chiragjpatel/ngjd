import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpErrorResponse, HTTP_INTERCEPTORS } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { error } from 'util';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
  intercept(
    req: import('@angular/common/http').HttpRequest<any>,
    next: import('@angular/common/http').HttpHandler
  ): import('rxjs').Observable<import('@angular/common/http').HttpEvent<any>> {
    return next.handle(req).pipe(
        catchError(httpErrorResponse => {
            if (httpErrorResponse.status === 401) {
                return throwError(httpErrorResponse.statusText);
            }
            if (httpErrorResponse instanceof HttpErrorResponse) {
                const applicationError = httpErrorResponse.headers.get('Application-Error');
                if (applicationError) {
                    return throwError(applicationError);
                }
                const serverError = httpErrorResponse.error;
                let modelStateErrors = '';
                if (serverError.errors && typeof serverError.errors === 'object') {
                    for (const key in serverError.errors) {
                        if (serverError.errors[key]) {
                            modelStateErrors += serverError.errors[key] + '\n';
                        }
                    }
                    return throwError(serverError.errors && typeof serverError.errors === 'object');
                }
                return throwError(modelStateErrors || serverError || 'Unknown server Error')
            }
        })
    );
  }
}
export const ErrorInterceptorProvider = {
    provide: HTTP_INTERCEPTORS,
    useClass: ErrorInterceptor,
    multi: true
};
