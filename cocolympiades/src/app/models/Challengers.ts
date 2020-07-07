export class Challenger {
  constructor(id: number, name: string, prono: Challenger, fetard: Challenger, hippie: Challenger, fairplay: Challenger) {
    this.id = id;
    this.name = name;
    this.prono = prono;
    this.fetard = fetard;
    this.hippie = hippie;
    this.fairplay = fairplay;
  }
  id: number;
  name: string;
  prono: Challenger;
  fetard: Challenger;
  hippie: Challenger;
  fairplay: Challenger;
}