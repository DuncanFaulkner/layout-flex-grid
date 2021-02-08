import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatIconRegistry } from '@angular/material/icon';
import { BrowserModule, HammerModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { MaterialModule } from '../shared/modules/material.module';
import { AppComponent } from './app.component';
import { GuidesModule } from './guides/guides.module';
import { HomeComponent } from './home/home.component';
import { ScullyLibModule } from '@scullyio/ng-lib';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'guides',
    loadChildren: () =>
      import('./guides/guides.module').then((m) => m.GuidesModule),
  },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full',
  },
  { path: 'blog', loadChildren: () => import('./blog/blog.module').then(m => m.BlogModule) },
];

@NgModule({
  declarations: [AppComponent, HomeComponent],
  imports: [
    BrowserModule,
    HammerModule,
    BrowserAnimationsModule,
    HttpClientModule,
    RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' }),
    FlexLayoutModule,
    MaterialModule,
    GuidesModule,
    ScullyLibModule,
  ],
  exports: [MaterialModule],
  providers: [MatIconRegistry],
  bootstrap: [AppComponent],
})
export class AppModule {}
