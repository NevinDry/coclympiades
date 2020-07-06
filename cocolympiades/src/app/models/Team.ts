import { Challenger } from './Challengers';

export class Team {
  // constructor(id: number, name: string, prono: Challenger, fetard: Challenger) {
  //   this.id = id;
  //   this.name = name;
  //   this.prono = prono;
  //   this.fetard = fetard;
  // }
  name: string;
  challengers: Array<Challenger>
}