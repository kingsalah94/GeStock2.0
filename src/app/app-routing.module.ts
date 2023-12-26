import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageLoginComponent } from './Pages/page-login/page-login.component';
import { PageInscriptionComponent } from './Pages/page-inscription/page-inscription.component';
import { PageDashboardComponent } from './Pages/page-dashboard/page-dashboard.component';
import { PageStatistiqueComponent } from './Pages/page-statistique/page-statistique.component';
import { PageArticlesComponent } from './Pages/Articles/page-articles/page-articles.component';
import { NouvelleArticleComponent } from './Pages/Articles/nouvelle-article/nouvelle-article.component';
import { PageMouvementDeStockComponent } from './Pages/MouvementDeStock/page-mouvement-de-stock/page-mouvement-de-stock.component';

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
      },
      {
        path: 'articles',
        component: PageArticlesComponent
      },
      {
        path: 'nouvellarticles',
        component: NouvelleArticleComponent
      },
      {
        path: 'mouvementDeStock',
        component: PageMouvementDeStockComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
