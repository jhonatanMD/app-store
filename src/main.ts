import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule , {cors : true});
  //app.enableCors();
  await app.listen(3000).then(res => console.log("server up => localhost:3000"));
}
bootstrap();
