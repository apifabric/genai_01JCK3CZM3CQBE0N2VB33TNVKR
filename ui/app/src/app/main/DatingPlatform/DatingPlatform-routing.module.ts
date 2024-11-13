import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DatingPlatformHomeComponent } from './home/DatingPlatform-home.component';
import { DatingPlatformNewComponent } from './new/DatingPlatform-new.component';
import { DatingPlatformDetailComponent } from './detail/DatingPlatform-detail.component';

const routes: Routes = [
  {path: '', component: DatingPlatformHomeComponent},
  { path: 'new', component: DatingPlatformNewComponent },
  { path: ':id', component: DatingPlatformDetailComponent,
    data: {
      oPermission: {
        permissionId: 'DatingPlatform-detail-permissions'
      }
    }
  },{
    path: ':platform_id/Candidate', loadChildren: () => import('../Candidate/Candidate.module').then(m => m.CandidateModule),
    data: {
        oPermission: {
            permissionId: 'Candidate-detail-permissions'
        }
    }
}
];

export const DATINGPLATFORM_MODULE_DECLARATIONS = [
    DatingPlatformHomeComponent,
    DatingPlatformNewComponent,
    DatingPlatformDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DatingPlatformRoutingModule { }