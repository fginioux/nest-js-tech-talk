import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { LogService } from './log/log.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly logService: LogService,
  ) {}

  @Get()
  getHello(): string {
    this.logService.log('@global implementation');

    return this.appService.getHello();
  }
}
