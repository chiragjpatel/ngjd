import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgxSpinnerModule } from 'ngx-spinner';
import { BsDropdownModule } from 'ngx-bootstrap';
import { SidebarModule } from 'ng-sidebar';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { AuthService } from './_services/auth.service';
import { HomeComponent } from './home/home.component';
import { ErrorInterceptorProvider } from './_services/error.interceptor';
import { DropdownSiteListComponent } from './nav/dropdown-site-list/dropdown-site-list.component';
import { AlertifyService } from './_services/alertify.service';
import { SiteService } from './_services/site.service';
import { DashboardComponent } from './dashboard/dashboard.component';
@NgModule({
   declarations: [
      AppComponent,
      NavComponent,
      HomeComponent,
      DropdownSiteListComponent,
      DashboardComponent
   ],
   imports: [
      BrowserModule,
      BrowserAnimationsModule,
      FormsModule,
      HttpClientModule,
      NgxSpinnerModule,
      BsDropdownModule.forRoot(),
      SidebarModule,
   ],
   providers: [
      AuthService,
      ErrorInterceptorProvider,
      AlertifyService,
      SiteService
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
