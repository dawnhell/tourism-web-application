import { Routes                 } from '@angular/router';
import { PageNotFoundComponent  } from './page-not-found/page-not-found.component';
import { HomePageComponent      } from './home-page/home-page.component';
import { FavoritesPageComponent } from './favorites-page/favorites-page.component';

export const APP_ROUTES: Routes = [
    {
        path: 'home',
        component: HomePageComponent
    },
    {
        path: 'favorites',
        component: FavoritesPageComponent
    },
    {
        path: '',
        pathMatch: 'full',
        redirectTo: '/home'
    },
    {
        path: '**',
        component: PageNotFoundComponent
    }
];
