import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";

// Modules
import { PagesRoutingModule } from './pages/pages.routing';
import { AuthRoutingModule } from './core/auth/auth.routing';

// Components
import { NotfoundComponent } from './pages/notfound/pages/notfound/notfound.component';

const routes: Routes = [
  // Pages -> PagesRouting
  // Auth -> AuthRouting
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' } 
]

@NgModule({
  imports: [
    RouterModule.forRoot( routes ),
    PagesRoutingModule,
    AuthRoutingModule
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
