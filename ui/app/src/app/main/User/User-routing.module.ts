import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserHomeComponent } from './home/User-home.component';
import { UserNewComponent } from './new/User-new.component';
import { UserDetailComponent } from './detail/User-detail.component';

const routes: Routes = [
  {path: '', component: UserHomeComponent},
  { path: 'new', component: UserNewComponent },
  { path: ':id', component: UserDetailComponent,
    data: {
      oPermission: {
        permissionId: 'User-detail-permissions'
      }
    }
  },{
    path: ':user_id/Favorite', loadChildren: () => import('../Favorite/Favorite.module').then(m => m.FavoriteModule),
    data: {
        oPermission: {
            permissionId: 'Favorite-detail-permissions'
        }
    }
},{
    path: ':user_id/Interaction', loadChildren: () => import('../Interaction/Interaction.module').then(m => m.InteractionModule),
    data: {
        oPermission: {
            permissionId: 'Interaction-detail-permissions'
        }
    }
}
];

export const USER_MODULE_DECLARATIONS = [
    UserHomeComponent,
    UserNewComponent,
    UserDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }