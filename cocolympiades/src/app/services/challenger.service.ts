import { Injectable } from '@angular/core';
import *  as  ChallengersData from '../../assets/challengers.json';
import { Challenger } from '../models/Challengers';
import { BehaviorSubject, Observable } from 'rxjs';
import { Day } from '../models/Day';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class ChallengerService {


  constructor(private firestore: AngularFirestore) {
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

  async setVote(hippie: Challenger, fetard: Challenger, fairplay: Challenger): Promise<any> {
    let chal: Challenger = JSON.parse(localStorage.getItem("challenger"));
    chal.fetard = fetard;
    chal.fairplay = fairplay;
    chal.hippie = hippie;

    localStorage.setItem("challenger", JSON.stringify(chal));
    this.challenger.next(chal);

    this.getResults().subscribe((votes:Array<Challenger>) => {
      if (votes.find(x => x.id == chal.id)) {
        throw "deja voté";
      } else {
        return this.firestore
          .collection("results").add(chal);
      }
    })
  }

  getResults() {
    return this.firestore.collection('results').valueChanges();
  }

  setCurrentDay(day: Day) {
    this.currentDay.next(day);
  }

}
