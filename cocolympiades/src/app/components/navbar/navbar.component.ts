import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ChallengerService } from 'src/app/services/challenger.service';
import { Day } from 'src/app/models/Day';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  day:Day = null;
  constructor(private challengerService: ChallengerService) { }

  ngOnInit() {
    this.challengerService.currentDayObservable.subscribe((day) => {
      this.day = day;  
    });
  }
}
