import { FooterModule } from './shared/components/footer/footer.module';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MarkdownModule } from 'ngx-markdown';

import { environment } from '../environments/environment';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing';
import { NavbarModule } from './shared/components/navbar/navbar.module';
import { StoreService } from './shared/services/store.service';

@NgModule({
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    BrowserAnimationsModule,
    AppRoutingModule,
    NavbarModule,
    FooterModule,
    AngularFireModule.initializeApp(environment.firebase),
    HttpClientModule,
    MarkdownModule.forRoot({ loader: HttpClient })
  ],
  declarations: [AppComponent],
  providers: [StoreService],
  bootstrap: [AppComponent]
})
export class AppModule {}
