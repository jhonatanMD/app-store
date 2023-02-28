import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { Person } from './model/person.model';
import { iPersonService } from './service/iperson.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService , private  iPersonService : iPersonService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }


  @Get('/person')
  getValue() : Person[] {
    return this.iPersonService.getPerson()
  }

  @Post('/person')
  postValue(@Body() person:Person) : Person[] {
    return this.iPersonService.postPerson(person)
  }
  
}
