import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule , {cors : true});
  //app.enableCors();
  app.useGlobalPipes(new ValidationPipe({

    whitelist : true, // negar o quitar del paylod no definidas en el dto
    forbidNonWhitelisted : true // genera alert cuando se el envia un dato no definido en el dto
    
  }))
  await app.listen(3000).then(res => console.log("server up => localhost:3000"));
}
bootstrap();
