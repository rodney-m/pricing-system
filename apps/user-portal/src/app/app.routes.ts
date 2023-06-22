import { Route } from '@angular/router';
import { AuthGuard } from '@pricing-system/core';
import { ContainerComponent } from '@pricing-system/ui/layout';

export const appRoutes: Route[] = [
    {
        path: 'auth',
        loadChildren: () => import('@pricing-system/ui/authentication').then(m => m.UiAuthenticationModule)
    },
    {
        path: '',
        component: ContainerComponent,
        canActivate: [AuthGuard],
        children: [
            {
                path: 'users' , loadChildren: ()=> import('@pricing-system/ui/user-management').then(m => m.UiUserManagementModule)
            }
        ]
        
    }
];
