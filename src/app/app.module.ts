import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { LoginComponent } from './core/auth/login/login.component';
import { RegisterComponent } from './core/auth/register/register.component';
import { NotfoundComponent } from './modules/notfound/pages/notfound/notfound.component';
import { DashboardComponent } from './modules/dashboard/pages/dashboard/dashboard.component';
import { BreadcrumbComponent } from './shared/components/breadcrumb/breadcrumb.component';
import { SidebarComponent } from './shared/components/sidebar/sidebar.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { ProgressComponent } from './modules/progress/progress.component';
import { Graphic1Component } from './modules/graphic1/graphic1.component';
import { ModulesComponent } from './modules/modules.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    NotfoundComponent,
    DashboardComponent,
    BreadcrumbComponent,
    SidebarComponent,
    HeaderComponent,
    ProgressComponent,
    Graphic1Component,
    ModulesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
