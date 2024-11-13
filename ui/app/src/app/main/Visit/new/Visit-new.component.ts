import { Component, Injector, ViewChild } from '@angular/core';
import { NavigationService, OFormComponent } from 'ontimize-web-ngx';

@Component({
  selector: 'Visit-new',
  templateUrl: './Visit-new.component.html',
  styleUrls: ['./Visit-new.component.scss']
})
export class VisitNewComponent {
  @ViewChild("VisitForm") form: OFormComponent;
  onInsertMode() {
    const default_values = {}
    this.form.setFieldValues(default_values);
  }
  constructor(protected injector: Injector) {
    this.injector.get(NavigationService).initialize();
  }
}