import { Routes } from '@angular/router';
import { SignalComponent } from './MyComponents/signal/signal.component';

// here we don't need to import which are loadComponent as they are importing
import { AddUserComponent } from './MyComponents/users/add-user/add-user.component';
import { PipesComponent } from './MyComponents/pipes/pipes.component';

export const routes: Routes = [
    {
        path: 'admin',
        loadChildren: () => import('./MyComponents/admin/admin.module').then(m => m.AdminModule)
    },
    {
        path: 'app-admin-add-user',
        // component: AddUserComponent  this will load every time (part of component) but lazy load will create chunk only on-demand
        loadComponent: () => import('./MyComponents/admin/add-user/add-user.component').then(m => m.AddUserComponent)
    },
    {
        path: 'signals',
        component: SignalComponent
    },
    {
        path: 'app-pipes',
        component: PipesComponent
        // loadComponent: () => import('./MyComponents/pipes/pipes.component').then(m => m.PipesComponent)
    },
    {
        // parametized route
        path: 'app-pipes/:id',
        component: PipesComponent,
        // loadComponent: () => import('./MyComponents/pipes/pipes.component').then(m => m.PipesComponent)
        outlet: 'primary',
        // child routes
        children: [
            {
                // app-pipes/overview
                path: 'overview',
                component: OverviewComponent
            },
            {
                path: 'overview',
                component: OverviewComponent
            },
            {
                path: 'overview',
                component: OverviewComponent
            },
        ]
    }
];
