import { Component, OnInit } from '@angular/core';
import *  as  DaysData from '../../../assets/days.json';
import { Day } from 'src/app/models/Day';
import bulmaCollapsible from '@creativebulma/bulma-collapsible';
import { Team } from 'src/app/models/Team';
import { Trial } from 'src/app/models/Trial';
import { ChallengerService } from 'src/app/services/challenger.service';
import { Challenger } from 'src/app/models/Challengers';

@Component({
  selector: 'app-days',
  templateUrl: './days.component.html',
  styleUrls: ['./days.component.scss']
})
export class DaysComponent implements OnInit {

  daySelected = null;
  trialSelected: Trial = null;
  team: Team = null;
  days: Array<Day> = (DaysData as any).default as Array<Day>;
  chal: Challenger = null;

  constructor(private challengerService: ChallengerService) { }

  ngOnInit() {
    this.challengerService.challengerObservable.subscribe((chal) => {
      this.chal = chal;  
    });
  }

  isItTime(time: number) {
    console.log(new Date(time));
    if (new Date() > new Date(time)) {
      return true;
    } else {
      return false;
    }
  }

  selectDay(day: number) {
    this.daySelected = this.days.find(x => x.id == day);
  }

  selectTrial(trial: Trial) {
    this.trialSelected = trial;
    this.team = trial.teams.find(x => x.challengers.find(y => y.name == this.chal.name));
  }

}
