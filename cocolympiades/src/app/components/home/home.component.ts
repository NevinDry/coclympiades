import { Component, OnInit } from '@angular/core';
import { ChallengerService } from 'src/app/services/challenger.service';
import { Challenger } from 'src/app/models/Challengers';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  chal: Challenger = null;
  go: boolean = false;

  constructor(private challengerService: ChallengerService) { }

  ngOnInit() {
    this.challengerService.challengerObservable.subscribe((chal) => {
      this.chal = chal;
      if(this.chal.prono){
        this.go = true;
      }
    });
  }

}
