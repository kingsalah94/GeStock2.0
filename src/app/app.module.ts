import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageLoginComponent } from './Pages/page-login/page-login.component';
import { PageInscriptionComponent } from './Pages/page-inscription/page-inscription.component';
import { PageDashboardComponent } from './Pages/page-dashboard/page-dashboard.component';
import { PageStatistiqueComponent } from './Pages/page-statistique/page-statistique.component';
import { MenuComponent } from './Composants/menu/menu.component';
import { HeaderComponent } from './Composants/header/header.component';
import { FooterComponent } from './Composants/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    PageLoginComponent,
    PageInscriptionComponent,
    PageDashboardComponent,
    PageStatistiqueComponent,
    MenuComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
