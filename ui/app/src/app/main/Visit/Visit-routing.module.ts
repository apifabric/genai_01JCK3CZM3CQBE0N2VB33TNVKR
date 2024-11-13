import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VisitHomeComponent } from './home/Visit-home.component';
import { VisitNewComponent } from './new/Visit-new.component';
import { VisitDetailComponent } from './detail/Visit-detail.component';

const routes: Routes = [
  {path: '', component: VisitHomeComponent},
  { path: 'new', component: VisitNewComponent },
  { path: ':id', component: VisitDetailComponent,
    data: {
      oPermission: {
        permissionId: 'Visit-detail-permissions'
      }
    }
  }
];

export const VISIT_MODULE_DECLARATIONS = [
    VisitHomeComponent,
    VisitNewComponent,
    VisitDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VisitRoutingModule { }