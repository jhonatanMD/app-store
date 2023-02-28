import { Injectable } from "@nestjs/common";
import { Person } from "src/model/person.model";
import { iPersonService } from "../iperson.service";

@Injectable()
export class PersonService implements  iPersonService{


    personList : Person[] = [];

    getPerson(): Person[] {
        return this.personList // [new Person('Jhonatan','Mallqui Diaz',24)]
    }

    postPerson(person:Person): Person[] {
        this.personList.push(person)
        return this.personList 
    }
    
}