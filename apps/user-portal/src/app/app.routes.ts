import { Route } from '@angular/router';

export const appRoutes: Route[] = [
    {
        path: 'auth',
        loadChildren: () => import('@pricing-system/ui/authentication').then(m => m.UiAuthenticationModule)
    }
];
