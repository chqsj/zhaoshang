import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpEvent,
  HttpHandler,
  HttpRequest,
  HttpResponse,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable()
export class CommonInterceptor implements HttpInterceptor {
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    // 先补全请求协议
    let url = req.url;
    if (url.indexOf('http://') < 0 || url.indexOf('https://') < 0) {
      url = 'http://' + url;
    }
    return next.handle(req).pipe(
      tap(
        (event) => {
          if (event instanceof HttpResponse) {
            console.log(event);
          }
        },
        (error) => {
          alert(
            `对不起,发生了${error.status}错误,错误信息:${error.statusText},错误的url:${error.url},参数:${req.body}`
          );
        }
      )
    );
  }
}
