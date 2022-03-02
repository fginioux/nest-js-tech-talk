import { Module } from '@nestjs/common';
import { LoginModule } from './login/login.module';
import { HttpModule } from './http/http.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LoginHttpService } from './login/login-http.service';
import { HttpService } from './http/http.service';

@Module({
  imports: [
    LoginModule.register([
      {
        provide: LoginHttpService,
        useExisting: HttpService,
      },
    ]),
    HttpModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
