import { FooterModule } from './shared/components/footer/footer.module';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MarkdownModule } from 'ngx-markdown';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing';
import { NavbarModule } from './shared/components/navbar/navbar.module';
import { StoreService } from './shared/services/store.service';
import { BreadcrumbModule } from './shared/components/breadcrumb/breadcrumb.module';

@NgModule({
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    BrowserAnimationsModule,
    AppRoutingModule,
    NavbarModule,
    FooterModule,
    HttpClientModule,
    MarkdownModule.forRoot({ loader: HttpClient }),
    BreadcrumbModule
  ],
  declarations: [AppComponent],
  providers: [StoreService],
  bootstrap: [AppComponent]
})
export class AppModule {}
