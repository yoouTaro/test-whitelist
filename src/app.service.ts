import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';

@Injectable()
export class AppService {
  constructor(private readonly httpService: HttpService) {}

  async getHello() {
    const response = await this.httpService.get(
      'https://whitelist-domain-nest-js-hj3l3.ondigitalocean.app/',
    );

    return response;
  }
}
