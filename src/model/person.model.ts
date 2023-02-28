export class Person {

    private name : string;
    private lastname : string;
    private age : number;

    constructor(name:string,lastname:string,age:number){
        this.name = name;
        this.lastname = lastname;
        this.age = age;
    }


    getName(): string{
        return this.name;
    }

    getLastName(): string{
        return this.lastname;
    }

    getAge(): number{
        return this.age;
    }

}