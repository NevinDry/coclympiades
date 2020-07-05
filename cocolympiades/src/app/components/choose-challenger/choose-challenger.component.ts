import { Component, OnInit } from '@angular/core';
import { Challenger } from 'src/app/models/Challengers';
import { ChallengerService } from 'src/app/services/challenger.service';

@Component({
  selector: 'app-choose-challenger',
  templateUrl: './choose-challenger.component.html',
  styleUrls: ['./choose-challenger.component.scss']
})
export class ChooseChallengerComponent implements OnInit {

  challengers: Array<Challenger> = [];
  chalSelected: Challenger = null;
  constructor(private challengerService: ChallengerService) { }

  ngOnInit() {
    this.challengers = this.challengerService.getChallengers();

  }

  setChallenger(chal: Challenger){
    this.challengerService.setChallenger(chal);
  }
}
