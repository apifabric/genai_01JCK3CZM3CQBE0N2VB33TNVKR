import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InteractionHomeComponent } from './home/Interaction-home.component';
import { InteractionNewComponent } from './new/Interaction-new.component';
import { InteractionDetailComponent } from './detail/Interaction-detail.component';

const routes: Routes = [
  {path: '', component: InteractionHomeComponent},
  { path: 'new', component: InteractionNewComponent },
  { path: ':id', component: InteractionDetailComponent,
    data: {
      oPermission: {
        permissionId: 'Interaction-detail-permissions'
      }
    }
  },{
    path: ':interaction_id/Visit', loadChildren: () => import('../Visit/Visit.module').then(m => m.VisitModule),
    data: {
        oPermission: {
            permissionId: 'Visit-detail-permissions'
        }
    }
}
];

export const INTERACTION_MODULE_DECLARATIONS = [
    InteractionHomeComponent,
    InteractionNewComponent,
    InteractionDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InteractionRoutingModule { }