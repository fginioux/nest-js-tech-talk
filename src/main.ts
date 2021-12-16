import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // App is now validable
  // See https://docs.nestjs.com/techniques/validation
  app.useGlobalPipes(new ValidationPipe({
    enableDebugMessages: true,
    stopAtFirstError: true
  }));
  await app.listen(3000);
}
bootstrap();
