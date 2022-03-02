import { Injectable } from '@nestjs/common';
import { Observable, of } from 'rxjs';

@Injectable()
export class HttpService {
  post(body: any): Observable<any> {
    console.log('@Global http Service');
    return of({
      status: 'Ok',
      response: {},
    });
  }
}
