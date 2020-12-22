import { Body, Controller, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { UserUpdateDTO } from './example.schema';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post()
  getHello(@Body() dto: UserUpdateDTO): string {
    console.log(dto);
    return this.appService.getHello();
  }
}
