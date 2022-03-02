import { Body, Controller, Post, UsePipes } from '@nestjs/common';
import { LogService } from 'src/log/log.service';
import { LoginService } from './login.service';
import { LoginPipe } from './login.pipe';

@Controller()
export class LoginController {
  constructor(
    private readonly service: LoginService,
    private readonly logService: LogService,
  ) {}

  @Post('/login')
  @UsePipes(new LoginPipe())
  login(@Body() { username, password }): any {
    console.log('@login controller !!!');

    this.logService.log('Message from log service !');

    return this.service.login(username, password);
  }
}
