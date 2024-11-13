import {CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { SharedModule } from '../../shared/shared.module';
import  {DATINGPLATFORM_MODULE_DECLARATIONS, DatingPlatformRoutingModule} from  './DatingPlatform-routing.module';

@NgModule({

  imports: [
    SharedModule,
    CommonModule,
    OntimizeWebModule,
    DatingPlatformRoutingModule
  ],
  declarations: DATINGPLATFORM_MODULE_DECLARATIONS,
  exports: DATINGPLATFORM_MODULE_DECLARATIONS,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class DatingPlatformModule { }