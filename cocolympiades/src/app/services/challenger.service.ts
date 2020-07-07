import { Injectable } from '@angular/core';
import *  as  ChallengersData from '../../assets/challengers.json';
import { Challenger } from '../models/Challengers';
import { BehaviorSubject } from 'rxjs';
import { Day } from '../models/Day';

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

  private currentDay = new BehaviorSubject<Day>(null);
  currentDayObservable = this.currentDay.asObservable();

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

  setVote(hippie: Challenger, fetard: Challenger, fairplay: Challenger) {
    let chal: Challenger = JSON.parse(localStorage.getItem("challenger"));
    chal.fetard = fetard;
    chal.fairplay = fairplay;
    chal.hippie = hippie;

    localStorage.setItem("challenger", JSON.stringify(chal));
    this.challenger.next(chal);
  }


  setCurrentDay(day: Day) {
    this.currentDay.next(day);
  }
  
}
