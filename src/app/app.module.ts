import { HttpClientModule, HttpClient } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { BrowserModule } from '@angular/platform-browser';
import { MarkdownModule } from 'ngx-markdown';

import { environment } from '../environments/environment';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing';
import { NavbarModule } from './shared/components/navbar/navbar.module';
import { ThumbnailService } from './shared/services/thumnail.service';

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
  providers: [ThumbnailService],
  bootstrap: [AppComponent]
})
export class AppModule {}
