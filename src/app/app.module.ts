import { PortfolioService } from './shared/services/portfolio.service';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { BrowserModule } from '@angular/platform-browser';
import { MarkdownModule } from 'ngx-markdown';

import { environment } from '../environments/environment';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing';
import { NavbarModule } from './shared/components/navbar/navbar.module';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    NavbarModule,
    AngularFireModule.initializeApp(environment.firebase),
    HttpClientModule,
    MarkdownModule.forRoot({ loader: HttpClient })
  ],
  declarations: [AppComponent],
  providers: [PortfolioService],
  bootstrap: [AppComponent]
})
export class AppModule {}
