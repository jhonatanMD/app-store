import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PersonService } from './service/impl/person.service';
import {iPersonService} from './service/iperson.service'
import { ProductsController } from './controller/products/products.controller';
import { CategoriesController } from './controller/categories/categories.controller';
import { ProductService } from './service/impl/product.service';
@Module({
  imports: [],
  controllers: [AppController, ProductsController, CategoriesController],
  providers: [AppService, {
    provide: iPersonService,
    useClass: PersonService
  }, ProductService],
})
export class AppModule {}
