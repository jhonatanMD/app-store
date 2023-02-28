
import {Person} from '../model/person.model'
export abstract class iPersonService {
    
  abstract  getPerson() : Person[];
  abstract  postPerson(person:Person): Person[] ;

}