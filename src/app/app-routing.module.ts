import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageLoginComponent } from './Pages/page-login/page-login.component';
import { PageInscriptionComponent } from './Pages/page-inscription/page-inscription.component';
import { PageDashboardComponent } from './Pages/page-dashboard/page-dashboard.component';
import { PageStatistiqueComponent } from './Pages/page-statistique/page-statistique.component';
import { PageArticlesComponent } from './Pages/Articles/page-articles/page-articles.component';
import { NouvelleArticleComponent } from './Pages/Articles/nouvelle-article/nouvelle-article.component';
import { PageMouvementDeStockComponent } from './Pages/MouvementDeStock/page-mouvement-de-stock/page-mouvement-de-stock.component';
import { PageClientComponent } from './Pages/Clients/page-client/page-client.component';
import { PageFounisseurComponent } from './Pages/Fournisseurs/page-founisseur/page-founisseur.component';
import { NouveauClientFournisseurComponent } from './Composants/nouveau-client-fournisseur/nouveau-client-fournisseur.component';
import { PageCommandeClientFounisseurComponent } from './Pages/MouvementDeStock/page-commande-client-founisseur/page-commande-client-founisseur.component';
import { NouvellCmdCltFrsComponent } from './Composants/nouvell-cmd-clt-frs/nouvell-cmd-clt-frs.component';
import { PageCategorieComponent } from './Pages/Categories/page-categorie/page-categorie.component';
import { NouvellCategorieComponent } from './Pages/Categories/nouvell-categorie/nouvell-categorie.component';

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
      },
      {
        path: 'client',
        component: PageClientComponent
      },
      {
        path: 'nouveauclient',
        component: NouveauClientFournisseurComponent
      },
      {
        path: 'commandClient',
        component: PageCommandeClientFounisseurComponent
      },
      {
        path: 'nouvellCommandClient',
        component: NouvellCmdCltFrsComponent
      },
      {
        path: 'fournisseur',
        component: PageFounisseurComponent
      },
      {
        path: 'nouveaufournisseur',
        component: NouveauClientFournisseurComponent
      },
      {
        path: 'commandFournisseur',
        component: PageCommandeClientFounisseurComponent
      },
      {
        path: 'nouvellCommandFournisseur',
        component: NouvellCmdCltFrsComponent
      },
      {
        path: 'categories',
        component: PageCategorieComponent
      },
      {
        path: 'nouvelcategory',
        component: NouvellCategorieComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
