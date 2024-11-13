import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FavoriteHomeComponent } from './home/Favorite-home.component';
import { FavoriteNewComponent } from './new/Favorite-new.component';
import { FavoriteDetailComponent } from './detail/Favorite-detail.component';

const routes: Routes = [
  {path: '', component: FavoriteHomeComponent},
  { path: 'new', component: FavoriteNewComponent },
  { path: ':id', component: FavoriteDetailComponent,
    data: {
      oPermission: {
        permissionId: 'Favorite-detail-permissions'
      }
    }
  }
];

export const FAVORITE_MODULE_DECLARATIONS = [
    FavoriteHomeComponent,
    FavoriteNewComponent,
    FavoriteDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FavoriteRoutingModule { }