import { Injectable } from '@angular/core';
import *  as  ChallengersData from '../../assets/challengers.json';
import { Challenger } from '../models/Challengers';

@Injectable({
  providedIn: 'root'
})
export class ChallengerService {

  constructor() {
  }

  updateChallengers(challengers: Array<Challenger>) {
    localStorage.setItem("challengers", JSON.stringify(challengers));
  }

  getChallengers(): Array<Challenger> {
    return JSON.parse(localStorage.getItem("challengers")) || (ChallengersData as any).default;
  }
}
