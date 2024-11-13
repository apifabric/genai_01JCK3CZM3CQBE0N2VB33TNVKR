import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'transactions-card',
  templateUrl: './Favorite-card.component.html',
  styleUrls: ['./Favorite-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.Favorite-card]': 'true'
  }
})

export class FavoriteCardComponent {


}