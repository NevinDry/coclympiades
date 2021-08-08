import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
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
  ended: boolean = false;

  constructor(private challengerService: ChallengerService) { }

  @Input() hacky: number;
  @Output() hacked = new EventEmitter<any>();

  ngOnInit() {
    this.challengerService.challengerObservable.subscribe((chal) => {
      this.chal = chal;  
      if(this.chal.hippie && this.chal.fairplay){
        this.ended = true;
      }
    });
    this.challengerService.currentDayObservable.subscribe((day) => {
      this.daySelected = day;  
      this.hacked.emit();
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

  isDisabled(time: number){
    if(!this.hackit()){
      return false;
    }
    else if(this.ended){
      return true;
    }else if(!this.isItTime(time)){
      return true;
    }else{
      return false;
    }
    
  }

  selectDay(day: number) {
    console.log(this.days);
    this.challengerService.setCurrentDay(this.days.find(x => x.id == day));
    this.trialSelected = null;
    this.hacked.emit();
  }

  selectTrial(trial: Trial) {
    this.trialSelected = trial;
    this.team = trial.teams ? trial.teams.find(x => x.challengers.find(y => y.id == this.chal.id)) : null;
  }

  hackit(){
    return this.hacky < 5;
  }

}
