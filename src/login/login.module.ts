import { DynamicModule, Module } from '@nestjs/common';
import { LoginHttpService } from './login-http.service';
import { LoginController } from './login.controller';
import { LoginService } from './login.service';
import { LoginPipe } from './login.pipe';

import { LogModule } from '../log/log.module';

/*
// Static
@Module({
  imports: [LogModule],
  controllers: [LoginController],
  providers: [LoginService, LoginHttpService],
})
export class LoginModule {}
*/

// Dynamic module
@Module({})
export class LoginModule {
  static register(providers: any[] = []): DynamicModule {
    return {
      module: LoginModule,
      imports: [LogModule],
      providers: [LoginService, LoginHttpService, ...providers],
      controllers: [LoginController],
    };
  }
}
