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
            },
            {
                path: 'banks' , loadChildren: ()=> import('@pricing-system/ui/banks').then(m => m.UiBanksModule)
            },
            {
                path: 'cost-drivers' , loadChildren: ()=> import('@pricing-system/ui/cost-drivers').then(m => m.UiCostDriversModule)
            },
            {
                path: 'calculations' , loadChildren: ()=> import('@pricing-system/ui/calculations').then(m => m.UiCalculationsModule)
            },
            {
                path: 'pricing-handbook' , loadChildren: ()=> import('@pricing-system/ui/pricing-handbook').then(m => m.UiPricingHandbookModule)
            },
            {
                path: 'cost-allocation' , loadChildren: ()=> import('@pricing-system/ui/cost-allocation').then(m => m.UiCostAllocationModule)
            },
            {
                path: 'parameters' , loadChildren: ()=> import('@pricing-system/ui/system-parameters').then(m => m.UiSystemParametersModule)
            },
            {
                path: 'Suppliers' , loadChildren: ()=> import('@pricing-system/ui/suppliers').then(m => m.UiSuppliersModule)
            },
        ]
        
    }
];
