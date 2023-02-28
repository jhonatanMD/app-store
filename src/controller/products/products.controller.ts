import { Controller,Get,Query ,Param, Post, Body, HttpCode, HttpStatus, Res} from '@nestjs/common';
import { Response } from 'express';
import { Product } from 'src/model/product.model';
import { PaginationProductQuery } from 'src/model/querys/pagination.product.query';
import { ProductService } from 'src/service/impl/product.service';

@Controller('products')
export class ProductsController {


    constructor(private productService:ProductService){}

    @Get()
    getProducts():Product[] {
        return this.productService.findAll();
    }
   
    @Get('/:id')
    //getProducts(@Param() params : any): string {
    getProductsId(@Param('id') id : any) : Product {
       return this.productService.findById(id);
    }
    @Get('pag/set')
    //getProductsPag(@Query() querys : any): string {
      //const {limit , offset} = querys;
     getProductsPag(
          @Query('limit') limit = 100 , 
          @Query('offset') offset = 0 ,
          @Query('brand') brand : string) : string {  
      return `products limit => ${limit} offset => ${offset}`;
    }

    @Get('pag/interface')
    //getProductsPag(@Query() querys : any): string {
      //const {limit , offset} = querys;
     getProductsPagInterface(
          @Query() query : PaginationProductQuery) : string {  
      return `products limit => ${query.limit} offset => ${query.offset}`;
    }
  

    @Post()
    @HttpCode(HttpStatus.OK)
    create(@Body() product:Product) : Product{
        return this.productService.create(product);
    }


}
