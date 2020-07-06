import { Injectable } from '@angular/core';
import *  as  ChallengersData from '../../assets/challengers.json';
import { Challenger } from '../models/Challengers';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChallengerService {

  constructor() {
    const chalStorage = localStorage.getItem("challenger");
    if (chalStorage !== null) {
      this.challenger.next(JSON.parse(chalStorage));
    }
  }

  private challenger = new BehaviorSubject<Challenger>(null);
  challengerObservable = this.challenger.asObservable();

  setChallenger(chal: Challenger) {
    localStorage.setItem("challenger", JSON.stringify(chal));
    this.challenger.next(chal);
  }

  getChallengers(): Array<Challenger> {
    return (ChallengersData as any).default as Array<Challenger>;
  }

  setProno(prono: Challenger) {
    let chal: Challenger = JSON.parse(localStorage.getItem("challenger"));
    chal.prono = prono;
    localStorage.setItem("challenger", JSON.stringify(chal));
    this.challenger.next(chal);
  }
  
}
