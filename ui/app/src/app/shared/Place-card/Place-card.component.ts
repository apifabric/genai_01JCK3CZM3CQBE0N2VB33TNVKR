import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'transactions-card',
  templateUrl: './Place-card.component.html',
  styleUrls: ['./Place-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.Place-card]': 'true'
  }
})

export class PlaceCardComponent {


}