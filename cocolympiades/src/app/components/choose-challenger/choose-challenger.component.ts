import { Component, OnInit } from '@angular/core';
import { Challenger } from 'src/app/models/Challengers';
import { ChallengerService } from 'src/app/services/challenger.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-choose-challenger',
  templateUrl: './choose-challenger.component.html',
  styleUrls: ['./choose-challenger.component.scss']
})
export class ChooseChallengerComponent implements OnInit {

  challengers: Array<Challenger> = [];
  chalSelected: Challenger = null;
  constructor(private challengerService: ChallengerService, private router: Router) { }

  ngOnInit() {
    this.challengers = this.challengerService.getChallengers();

  }

  setChallenger(chal: Challenger){
    this.challengerService.setChallenger(chal);
    this.router.navigateByUrl('/prono');
  }
}
