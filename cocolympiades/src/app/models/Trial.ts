import { Team } from './Team';

export class Trial {
  // constructor(id: number, name: string, prono: Challenger, fetard: Challenger) {
  //   this.id = id;
  //   this.name = name;
  //   this.prono = prono;
  //   this.fetard = fetard;
  // }
  id: number;
  name: string;
  teams: Array<Team>
}