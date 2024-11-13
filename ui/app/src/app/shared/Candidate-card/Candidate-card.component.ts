import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'transactions-card',
  templateUrl: './Candidate-card.component.html',
  styleUrls: ['./Candidate-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.Candidate-card]': 'true'
  }
})

export class CandidateCardComponent {


}