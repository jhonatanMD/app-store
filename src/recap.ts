const myName = 'Jhonatan'


const suma = (a:number , b:number) => {
    return a + b;
}


console.log(12,9)


class Person {

    /*private age;
    private name;
*/
     constructor(private age : number , private name : string){
        this.age = age;
        this.name = name;
     }

    getSumary(){
        return `My name is ${this.name} and Im ${this.age} years old`
    }

}

const jhonatan = new Person(23,'Jhonatan');


console.log(jhonatan.getSumary())