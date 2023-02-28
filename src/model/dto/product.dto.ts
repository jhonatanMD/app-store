import { IsString  , IsNotEmpty} from "class-validator"
import { PartialType } from "@nestjs/mapped-types"
export class CreateProductDto { 

    @IsNotEmpty()
    @IsString({message : 'el nombre del producto debe ser un string'})
    readonly name : string

    @IsNotEmpty()
    @IsString()
    readonly brand : string
}

export class UpdateProductDto extends PartialType(CreateProductDto){
    
}