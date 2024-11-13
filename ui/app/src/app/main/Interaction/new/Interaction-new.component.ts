import { Component, Injector, ViewChild } from '@angular/core';
import { NavigationService, OFormComponent } from 'ontimize-web-ngx';

@Component({
  selector: 'Interaction-new',
  templateUrl: './Interaction-new.component.html',
  styleUrls: ['./Interaction-new.component.scss']
})
export class InteractionNewComponent {
  @ViewChild("InteractionForm") form: OFormComponent;
  onInsertMode() {
    const default_values = {}
    this.form.setFieldValues(default_values);
  }
  constructor(protected injector: Injector) {
    this.injector.get(NavigationService).initialize();
  }
}