import {Routes, RouterModule, PreloadAllModules} from "@angular/router";
import {HomeComponent} from "./home/home.component";
import {CustomPreloadingStrategy} from "./shared/preload/custom-preloading.strategy";

let APP_ROUTES: Routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: '**',
        redirectTo: 'home'
    }
];

export let AppRouterModule = RouterModule.forRoot(APP_ROUTES, {
    preloadingStrategy: CustomPreloadingStrategy,
   // useHash: true,
   // initialNavigation: false
} );
