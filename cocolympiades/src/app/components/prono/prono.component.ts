import { Component, OnInit } from '@angular/core';
import { ChallengerService } from 'src/app/services/challenger.service';
import { Challenger } from 'src/app/models/Challengers';
import { Router } from '@angular/router';

@Component({
  selector: 'app-prono',
  templateUrl: './prono.component.html',
  styleUrls: ['./prono.component.scss']
})
export class PronoComponent implements OnInit {
  challengers: Array<Challenger> = [];
  prono: Challenger = null;
  constructor(private challengerService: ChallengerService, private router: Router) { }

  ngOnInit() {
    this.challengers = this.challengerService.getChallengers();
    this.prono = this.challengers[0];
  }

  setProno(prono: Challenger){
    this.challengerService.setProno(prono);
    this.router.navigateByUrl('');
  }
}
