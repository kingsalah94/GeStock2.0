import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageLoginComponent } from './Pages/page-login/page-login.component';
import { PageInscriptionComponent } from './Pages/page-inscription/page-inscription.component';
import { PageDashboardComponent } from './Pages/page-dashboard/page-dashboard.component';
import { PageStatistiqueComponent } from './Pages/page-statistique/page-statistique.component';

const routes: Routes = [
  {
    path:'login',
    component: PageLoginComponent
  },
  {
    path:'inscription',
    component: PageInscriptionComponent
  },
  {
    path:'',
    component: PageDashboardComponent,
    children:[
      {
        path: 'statistiques',
        component: PageStatistiqueComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
