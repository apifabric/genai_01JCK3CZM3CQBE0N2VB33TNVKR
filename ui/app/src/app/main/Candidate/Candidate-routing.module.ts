import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CandidateHomeComponent } from './home/Candidate-home.component';
import { CandidateNewComponent } from './new/Candidate-new.component';
import { CandidateDetailComponent } from './detail/Candidate-detail.component';

const routes: Routes = [
  {path: '', component: CandidateHomeComponent},
  { path: 'new', component: CandidateNewComponent },
  { path: ':id', component: CandidateDetailComponent,
    data: {
      oPermission: {
        permissionId: 'Candidate-detail-permissions'
      }
    }
  },{
    path: ':candidate_id/Favorite', loadChildren: () => import('../Favorite/Favorite.module').then(m => m.FavoriteModule),
    data: {
        oPermission: {
            permissionId: 'Favorite-detail-permissions'
        }
    }
},{
    path: ':candidate_id/Interaction', loadChildren: () => import('../Interaction/Interaction.module').then(m => m.InteractionModule),
    data: {
        oPermission: {
            permissionId: 'Interaction-detail-permissions'
        }
    }
}
];

export const CANDIDATE_MODULE_DECLARATIONS = [
    CandidateHomeComponent,
    CandidateNewComponent,
    CandidateDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CandidateRoutingModule { }