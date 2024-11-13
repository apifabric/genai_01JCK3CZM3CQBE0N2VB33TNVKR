import { Component, Injector, ViewChild } from '@angular/core';
import { NavigationService, OFormComponent } from 'ontimize-web-ngx';

@Component({
  selector: 'Favorite-new',
  templateUrl: './Favorite-new.component.html',
  styleUrls: ['./Favorite-new.component.scss']
})
export class FavoriteNewComponent {
  @ViewChild("FavoriteForm") form: OFormComponent;
  onInsertMode() {
    const default_values = {}
    this.form.setFieldValues(default_values);
  }
  constructor(protected injector: Injector) {
    this.injector.get(NavigationService).initialize();
  }
}