import { Component, OnInit } from '@angular/core';
import { Challenger } from 'src/app/models/Challengers';
import { ChallengerService } from 'src/app/services/challenger.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vote',
  templateUrl: './vote.component.html',
  styleUrls: ['./vote.component.scss']
})
export class VoteComponent implements OnInit {

  challengers: Array<Challenger> = [];
  hippie: Challenger = null;
  fairplay: Challenger = null;
  fetard: Challenger = null;
  vote: boolean = false;
  error: any;

  constructor(private challengerService: ChallengerService, private router: Router) { }

  ngOnInit() {

    this.challengerService.challengerObservable.subscribe((chal) => {
    
      this.challengers = this.challengerService.getChallengers();
      let chalInArray = this.challengers.findIndex(x => x.id == chal.id);
      if(chalInArray != -1){
        this.challengers.splice(chalInArray, 1);
      }
      this.fetard = this.challengers[3];
      this.fairplay = this.challengers[6];
      this.hippie = this.challengers[9];

    });
  }

  setVote() {
    this.challengerService.setVote(this.hippie, this.fairplay, this.fetard).then(res => {
      this.vote = true;
      setTimeout(() => {
        this.router.navigateByUrl('/home');
      }, 3000);
    }).catch(err => {
      this.error = err;
      console.log(err);
    });
  }



}
