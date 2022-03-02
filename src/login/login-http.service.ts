import { Injectable } from '@nestjs/common';
import { Observable, of } from 'rxjs';

@Injectable()
export class LoginHttpService {
  post(body: any): Observable<any> {
    console.log('@http service for login !');

    return of({});
  }
}
