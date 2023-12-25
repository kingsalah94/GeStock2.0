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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
