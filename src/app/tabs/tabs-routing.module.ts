import { AuthGuard } from './../shared/auth.guard';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'pain',
        loadChildren: () => import('../pain/pain.module').then( m => m.PainPageModule)
        // canActivate: [AuthGuard]
      },
      {
        path: 'symptoms',
        loadChildren: () => import('../symptoms/symptoms.module').then( m => m.SymptomsPageModule)
      },
      {
        path: 'medicaments',
        loadChildren: () => import('../medicament/medicament.module').then(m => m.MedicamentPageModule)
      },
      {
        path: '',
        redirectTo: '/tabs/pain',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
