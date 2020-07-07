import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ChallengerService } from 'src/app/services/challenger.service';
import { Day } from 'src/app/models/Day';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  day: Day = null;
  constructor(private challengerService: ChallengerService, private router: Router) { }

  ngOnInit() {
    this.challengerService.currentDayObservable.subscribe((day) => {
      this.day = day;
    });
  }

  backToMenu() {
    this.challengerService.setCurrentDay(null);
    this.router.navigateByUrl('/home');
  }

  refresh(): void {
    window.location.reload();
  }
}
