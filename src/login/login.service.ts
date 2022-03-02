import { Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';
import { LoginHttpService } from './login-http.service';

@Injectable()
export class LoginService {
  constructor(private httpService: LoginHttpService) {}

  login(username: string, password: string): Observable<any> {
    return this.httpService.post({ username, password });
  }
}
