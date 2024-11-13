import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlaceHomeComponent } from './home/Place-home.component';
import { PlaceNewComponent } from './new/Place-new.component';
import { PlaceDetailComponent } from './detail/Place-detail.component';

const routes: Routes = [
  {path: '', component: PlaceHomeComponent},
  { path: 'new', component: PlaceNewComponent },
  { path: ':id', component: PlaceDetailComponent,
    data: {
      oPermission: {
        permissionId: 'Place-detail-permissions'
      }
    }
  },{
    path: ':place_id/Visit', loadChildren: () => import('../Visit/Visit.module').then(m => m.VisitModule),
    data: {
        oPermission: {
            permissionId: 'Visit-detail-permissions'
        }
    }
}
];

export const PLACE_MODULE_DECLARATIONS = [
    PlaceHomeComponent,
    PlaceNewComponent,
    PlaceDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlaceRoutingModule { }