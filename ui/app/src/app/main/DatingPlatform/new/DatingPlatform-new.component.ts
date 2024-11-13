import { Component, Injector, ViewChild } from '@angular/core';
import { NavigationService, OFormComponent } from 'ontimize-web-ngx';

@Component({
  selector: 'DatingPlatform-new',
  templateUrl: './DatingPlatform-new.component.html',
  styleUrls: ['./DatingPlatform-new.component.scss']
})
export class DatingPlatformNewComponent {
  @ViewChild("DatingPlatformForm") form: OFormComponent;
  onInsertMode() {
    const default_values = {}
    this.form.setFieldValues(default_values);
  }
  constructor(protected injector: Injector) {
    this.injector.get(NavigationService).initialize();
  }
}