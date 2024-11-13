import { Component, Injector, ViewChild } from '@angular/core';
import { NavigationService, OFormComponent } from 'ontimize-web-ngx';

@Component({
  selector: 'Candidate-new',
  templateUrl: './Candidate-new.component.html',
  styleUrls: ['./Candidate-new.component.scss']
})
export class CandidateNewComponent {
  @ViewChild("CandidateForm") form: OFormComponent;
  onInsertMode() {
    const default_values = {}
    this.form.setFieldValues(default_values);
  }
  constructor(protected injector: Injector) {
    this.injector.get(NavigationService).initialize();
  }
}