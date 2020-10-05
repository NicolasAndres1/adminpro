import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";

import { LoginComponent } from './core/auth/login/login.component';
import { RegisterComponent } from './core/auth/register/register.component';
import { DashboardComponent } from './modules/dashboard/pages/dashboard/dashboard.component';
import { Graphic1Component } from './modules/graphic1/graphic1.component';
import { ModulesComponent } from './modules/modules.component';
import { NotfoundComponent } from './modules/notfound/pages/notfound/notfound.component';
import { ProgressComponent } from './modules/progress/progress.component';

const routes: Routes = [
  { 
    path: '', 
    component: ModulesComponent,
    children: [
      { path: 'dashboard', component: DashboardComponent },
      { path: 'graphic1', component: Graphic1Component },
      { path: 'progress', component: ProgressComponent },
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' }
    ]
  },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  // { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: '**', component: NotfoundComponent }
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot( routes )
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
