export class Product {

     private id: number;
     private name : string;
     private brand : string;
    

    constructor(id : number,name:string,brand:string){
        this.id = id
        this.name = name;
        this.brand = brand;
    }

    setId(id:number){
        this.id = id
    }

    getId(): number{
        return this.id;
    }
    getName(): string{
        return this.name;
    }

    getBrand(): string{
        return this.brand;
    }

}