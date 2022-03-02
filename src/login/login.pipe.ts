import { BadRequestException, Injectable, PipeTransform } from '@nestjs/common';

@Injectable()
export class LoginPipe implements PipeTransform {
  transform(value: any, metadata: any): any {
    const { username, password } = value;

    if (!username || !password) {
      throw new BadRequestException(
        'Validation failed - Login require username and password',
      );
    }

    return {
      username: `login - ${username}`,
      password: `login - ${password}`,
    };
  }
}
