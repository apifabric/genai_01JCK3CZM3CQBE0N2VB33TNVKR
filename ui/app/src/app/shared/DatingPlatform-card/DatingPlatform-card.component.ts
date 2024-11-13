import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'transactions-card',
  templateUrl: './DatingPlatform-card.component.html',
  styleUrls: ['./DatingPlatform-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.DatingPlatform-card]': 'true'
  }
})

export class DatingPlatformCardComponent {


}