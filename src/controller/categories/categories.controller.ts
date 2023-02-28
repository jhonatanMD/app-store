import { Controller,Get,Param } from '@nestjs/common';

@Controller('categories')
export class CategoriesController {

    @Get('/:id/products/:productId')
    //getProducts(@Param() params : any): string {
    getCategory(@Param('id') id : string , @Param('productId') productId : string): string {
      return `categories ==> ${id}   ==> product ==> ${productId}`;
    }
  
}
