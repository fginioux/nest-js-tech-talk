import { Global, Module } from '@nestjs/common';
import { HttpService } from './http.service';

@Global()
@Module({
  imports: [],
  providers: [HttpService],
  exports: [HttpService],
})
export class HttpModule {}
