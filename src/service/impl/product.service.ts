import { Injectable , NotFoundException ,HttpException , HttpStatus} from '@nestjs/common';
import { Product } from 'src/model/product.model';

@Injectable()
export class ProductService {

    private products : Product[] =  [new Product(1,'gaseosa','coca-cola'),new Product(2,'gaseosa','pepsi')];


    findAll() : Product[] {
        return this.products;
    }

    findById(id : number) : Product {

        const product = this.products.filter(item  => item.getId() ==  id)
        .shift();
        
        if(!product){
           // throw  new NotFoundException(`no se encontro producto con el id ==> ${id}`)
           throw new HttpException(`no se encontro producto con el id ==> ${id}`, HttpStatus.NOT_FOUND)
        }

        return product;    
    }


    create(product:Product) : Product{

        product.setId( this.products.length + 1)
        this.products.push(product);
        return product;
    }
}