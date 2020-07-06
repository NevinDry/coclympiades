import { Trial } from './Trial';

export class Day {
  // constructor(id: number, name: string, prono: Challenger, fetard: Challenger) {
  //   this.id = id;
  //   this.name = name;
  //   this.prono = prono;
  //   this.fetard = fetard;
  // }
  id: number;
  name: string;
  trials: Array<Trial>
}