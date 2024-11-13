import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'transactions-card',
  templateUrl: './Visit-card.component.html',
  styleUrls: ['./Visit-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.Visit-card]': 'true'
  }
})

export class VisitCardComponent {


}