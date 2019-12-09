import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GbSidenavModule } from '@gavinb841/gb-sidenav';

import { AppComponent } from './app.component';
import { GbNavbarModule } from 'gb-navbar';
import { GbSidenavShowcaseComponent } from './gb-sidenav-showcase/gb-sidenav-showcase.component';
import { GbNavbarShowcaseComponent } from './gb-navbar-showcase/gb-navbar-showcase.component';

const appRoutes: Routes = [
  {path: 'components/paginationDemo', component: AppComponent},
  {path: 'components/sidenavDemo', component: AppComponent},
  {path: 'filters/searchDemo', component: AppComponent},
  {path: 'services/utilsDemo', component: AppComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    GbSidenavShowcaseComponent,
    GbNavbarShowcaseComponent
  ],
  imports: [
    BrowserModule,
    GbSidenavModule,
    GbNavbarModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
