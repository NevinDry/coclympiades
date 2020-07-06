import { Component } from '@angular/core';
import { Challenger } from './models/Challengers';
import { ChallengerService } from './services/challenger.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'cocolympiades';
  chal: Challenger = null;
  go: boolean = false;

  constructor(private challengerService: ChallengerService, private router: Router) { }

  ngOnInit() {
    this.challengerService.challengerObservable.subscribe((chal) => {
      if(chal){
        this.chal = chal;
      }else{
        this.router.navigateByUrl('');

      }
    });
  }

}
