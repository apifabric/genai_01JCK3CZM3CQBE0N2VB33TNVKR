import { MenuRootItem } from 'ontimize-web-ngx';

import { CandidateCardComponent } from './Candidate-card/Candidate-card.component';

import { DatingPlatformCardComponent } from './DatingPlatform-card/DatingPlatform-card.component';

import { FavoriteCardComponent } from './Favorite-card/Favorite-card.component';

import { InteractionCardComponent } from './Interaction-card/Interaction-card.component';

import { PlaceCardComponent } from './Place-card/Place-card.component';

import { UserCardComponent } from './User-card/User-card.component';

import { VisitCardComponent } from './Visit-card/Visit-card.component';


export const MENU_CONFIG: MenuRootItem[] = [
    { id: 'home', name: 'HOME', icon: 'home', route: '/main/home' },
    
    {
    id: 'data', name: ' data', icon: 'remove_red_eye', opened: true,
    items: [
    
        { id: 'Candidate', name: 'CANDIDATE', icon: 'view_list', route: '/main/Candidate' }
    
        ,{ id: 'DatingPlatform', name: 'DATINGPLATFORM', icon: 'view_list', route: '/main/DatingPlatform' }
    
        ,{ id: 'Favorite', name: 'FAVORITE', icon: 'view_list', route: '/main/Favorite' }
    
        ,{ id: 'Interaction', name: 'INTERACTION', icon: 'view_list', route: '/main/Interaction' }
    
        ,{ id: 'Place', name: 'PLACE', icon: 'view_list', route: '/main/Place' }
    
        ,{ id: 'User', name: 'USER', icon: 'view_list', route: '/main/User' }
    
        ,{ id: 'Visit', name: 'VISIT', icon: 'view_list', route: '/main/Visit' }
    
    ] 
},
    
    { id: 'settings', name: 'Settings', icon: 'settings', route: '/main/settings'}
    ,{ id: 'about', name: 'About', icon: 'info', route: '/main/about'}
    ,{ id: 'logout', name: 'LOGOUT', route: '/login', icon: 'power_settings_new', confirm: 'yes' }
];

export const MENU_COMPONENTS = [

    CandidateCardComponent

    ,DatingPlatformCardComponent

    ,FavoriteCardComponent

    ,InteractionCardComponent

    ,PlaceCardComponent

    ,UserCardComponent

    ,VisitCardComponent

];