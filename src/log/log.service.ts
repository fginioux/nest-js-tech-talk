import { Injectable } from '@nestjs/common';

@Injectable()
export class LogService {
  log(msg: string): void {
    console.log(msg);
  }
}
