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
    this.challengerService.challengerObservable.subscribe((chal) => {
      this.prono =  chal.prono ? this.challengers.find(x => x.name = chal.prono.name) : this.challengers[0];
      // this.challengers.splice(this.challengers.findIndex(x => x.name == chal.name), 1);
    });

    console.log(this.challengers);
  }

  setProno(prono: Challenger){
    this.challengerService.setProno(prono);
    this.router.navigateByUrl('');
  }
}
