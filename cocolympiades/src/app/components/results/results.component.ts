import { Component, OnInit } from '@angular/core';
import { ChallengerService } from 'src/app/services/challenger.service';
import { Challenger } from 'src/app/models/Challengers';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss']
})
export class ResultsComponent implements OnInit {
  data: Array<Challenger>;
  fetard = null;
  fairplay = null;
  hippie = null;
  prono = null;
  challenger: Challenger = null;
  constructor(private challengerService: ChallengerService) { }

  ngOnInit() {
    this.challengerService.challengerObservable.subscribe((chal) => {
      this.challenger = chal;
    });
    this.challengerService.getResults().subscribe((data: Array<Challenger>) => {
      this.data = data;
      const fetards = [];
      const fairplays = [];
      const hippies = [];
      const pronos = [];
      data.forEach(element => {
        fetards.push(element.fetard.name);
        fairplays.push(element.fairplay.name);
        hippies.push(element.hippie.name);
        pronos.push(element.prono.name);
      });
      this.fetard = this.findMostOcc(fetards);
      this.fairplay = this.findMostOcc(fairplays);
      this.hippie = this.findMostOcc(hippies);
      this.prono = this.findMostOcc(pronos);
    });
  }

  findMostOcc(array: Array<any>) {
    var newArr = array.slice().sort(), most = [undefined, 0], counter = 0;

    newArr.reduce(function(old, chr){
       old == chr ? ++counter > most[1] && (most = [chr, counter]) : (counter = 1)
       return chr
    });

    return most;
  }

}
