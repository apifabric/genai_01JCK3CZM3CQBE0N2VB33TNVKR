import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MainComponent } from './main.component';

export const routes: Routes = [
  {
    path: '', component: MainComponent,
    children: [
        { path: '', redirectTo: 'home', pathMatch: 'full' },
        { path: 'about', loadChildren: () => import('./about/about.module').then(m => m.AboutModule) },
        { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },
        { path: 'settings', loadChildren: () => import('./settings/settings.module').then(m => m.SettingsModule) },
      
    
        { path: 'Candidate', loadChildren: () => import('./Candidate/Candidate.module').then(m => m.CandidateModule) },
    
        { path: 'DatingPlatform', loadChildren: () => import('./DatingPlatform/DatingPlatform.module').then(m => m.DatingPlatformModule) },
    
        { path: 'Favorite', loadChildren: () => import('./Favorite/Favorite.module').then(m => m.FavoriteModule) },
    
        { path: 'Interaction', loadChildren: () => import('./Interaction/Interaction.module').then(m => m.InteractionModule) },
    
        { path: 'Place', loadChildren: () => import('./Place/Place.module').then(m => m.PlaceModule) },
    
        { path: 'User', loadChildren: () => import('./User/User.module').then(m => m.UserModule) },
    
        { path: 'Visit', loadChildren: () => import('./Visit/Visit.module').then(m => m.VisitModule) },
    
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }