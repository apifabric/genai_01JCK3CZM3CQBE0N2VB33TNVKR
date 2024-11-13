import {CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { SharedModule } from '../../shared/shared.module';
import  {INTERACTION_MODULE_DECLARATIONS, InteractionRoutingModule} from  './Interaction-routing.module';

@NgModule({

  imports: [
    SharedModule,
    CommonModule,
    OntimizeWebModule,
    InteractionRoutingModule
  ],
  declarations: INTERACTION_MODULE_DECLARATIONS,
  exports: INTERACTION_MODULE_DECLARATIONS,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class InteractionModule { }