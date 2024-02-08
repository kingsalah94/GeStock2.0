import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageLoginComponent } from './Pages/page-login/page-login.component';
import { PageInscriptionComponent } from './Pages/page-inscription/page-inscription.component';
import { PageDashboardComponent } from './Pages/page-dashboard/page-dashboard.component';
import { FooterComponent } from './Composants/footer/footer.component';
import { HeaderComponent } from './Composants/header/header.component';
import { MenuComponent } from './Composants/menu/menu.component';
import { PageArticlesComponent } from './Pages/Articles/page-articles/page-articles.component';
import { DetailsArticlesComponent } from './Composants/details-articles/details-articles.component';
import { PaginationComponent } from './Composants/pagination/pagination.component';
import { BoutonActionComponent } from './Composants/bouton-action/bouton-action.component';
import { NouvelleArticleComponent } from './Pages/Articles/nouvelle-article/nouvelle-article.component';
import { PageMouvementDeStockComponent } from './Pages/MouvementDeStock/page-mouvement-de-stock/page-mouvement-de-stock.component';
import { DetailsMouvementDeSotckArticleComponent } from './Composants/details-mouvement-de-sotck-article/details-mouvement-de-sotck-article.component';
import { DetailsMouvementDeSotckComponent } from './Composants/details-mouvement-de-sotck/details-mouvement-de-sotck.component';
import { DetailsClientFournisseurComponent } from './Composants/details-client-fournisseur/details-client-fournisseur.component';
import { PageClientComponent } from './Pages/Clients/page-client/page-client.component';
import { PageFounisseurComponent } from './Pages/Fournisseurs/page-founisseur/page-founisseur.component';
import { NouveauClientFournisseurComponent } from './Composants/nouveau-client-fournisseur/nouveau-client-fournisseur.component';
import { DetailsCommandClientFournisseurComponent } from './Composants/details-command-client-fournisseur/details-command-client-fournisseur.component';
import { DetailsCommandeComponent } from './Composants/details-commande/details-commande.component';
import { PageCommandeClientFounisseurComponent } from './Pages/MouvementDeStock/page-commande-client-founisseur/page-commande-client-founisseur.component';
import { NouvellCmdCltFrsComponent } from './Composants/nouvell-cmd-clt-frs/nouvell-cmd-clt-frs.component';
import { PageCategorieComponent } from './Pages/Categories/page-categorie/page-categorie.component';
import { NouvellCategorieComponent } from './Pages/Categories/nouvell-categorie/nouvell-categorie.component';
import { DetailsCategoryComponent } from './Composants/details-category/details-category.component';
import { PageUtilisateurComponent } from './Pages/Utilisateurs/page-utilisateur/page-utilisateur.component';
import { DetailsUtilisateursComponent } from './Composants/details-utilisateurs/details-utilisateurs.component';
import { NouvellUtilisaterComponent } from './Pages/Utilisateurs/nouvell-utilisater/nouvell-utilisater.component';
import { PageProfilComponent } from './Pages/Profil/page-profil/page-profil.component';
import { ChangeMotDePasseComponent } from './Pages/Profil/change-mot-de-passe/change-mot-de-passe.component';



@NgModule({
  declarations: [
    AppComponent,
    PageLoginComponent,
    PageInscriptionComponent,
    PageDashboardComponent,
    MenuComponent,
    FooterComponent,
    HeaderComponent,
    PageArticlesComponent,
    DetailsArticlesComponent,
    PaginationComponent,
    BoutonActionComponent,
    NouvelleArticleComponent,
    PageMouvementDeStockComponent,
    DetailsMouvementDeSotckArticleComponent,
    DetailsMouvementDeSotckComponent,
    DetailsClientFournisseurComponent,
    PageClientComponent,
    PageFounisseurComponent,
    NouveauClientFournisseurComponent,
    DetailsCommandClientFournisseurComponent,
    DetailsCommandeComponent,
    PageCommandeClientFounisseurComponent,
    NouvellCmdCltFrsComponent,
    PageCategorieComponent,
    NouvellCategorieComponent,
    DetailsCategoryComponent,
    PageUtilisateurComponent,
    DetailsUtilisateursComponent,
    NouvellUtilisaterComponent,
    PageProfilComponent,
    ChangeMotDePasseComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
