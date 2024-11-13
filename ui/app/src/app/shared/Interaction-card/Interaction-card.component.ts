import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'transactions-card',
  templateUrl: './Interaction-card.component.html',
  styleUrls: ['./Interaction-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.Interaction-card]': 'true'
  }
})

export class InteractionCardComponent {


}