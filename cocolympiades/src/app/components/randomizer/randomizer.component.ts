import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ChallengerService } from 'src/app/services/challenger.service';
import { Challenger } from 'src/app/models/Challengers';
import { Duo } from 'src/app/models/Duo';

@Component({
  selector: 'app-randomizer',
  templateUrl: './randomizer.component.html',
  styleUrls: ['./randomizer.component.scss']
})
export class RandomizerComponent implements OnInit {

  private challengers: Array<Challenger> = [];
  public duos: Array<Duo> = [];
  constructor(private challegerService: ChallengerService) { }
  ngOnInit() {
    this.challengers = this.challegerService.getChallengers();
  }

  randomize(teamNumber: number) {
    this.freeAllChallengers()
    if (teamNumber == 2) {
      this.randomize2();
    } else {
      this.randomize4();
    }
  }

  randomize2() {
    this.duos = [];
    this.challengers.forEach(challenger1 => {
        this.challengers.forEach(challenger2 => {
          if(!challenger2.isPicked && !challenger1.isPicked && this.havntPlayedTogether(challenger1, challenger2)){
            
            this.duos.push({challenger1: challenger1.name, challenger2: challenger2.name});

            challenger1.playedWith2.push(challenger2.name);
            challenger1.isPicked = true;

            challenger2.playedWith2.push(challenger1.name);
            challenger2.isPicked = true;
          }
        });
 
    });
    this.challegerService.updateChallengers(this.challengers);
  }
  havntPlayedTogether(challenger1: Challenger, challenger2:Challenger){
    return challenger1.name != challenger2.name && !challenger1.playedWith2.includes(challenger2.name)
  }

  randomize4() {

  }

  freeAllChallengers(){
    this.challengers.forEach(challenger => {
      challenger.isPicked = false;
    });
  }
}
