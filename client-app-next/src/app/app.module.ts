import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { UpgradeModule } from '@angular/upgrade/static';

import { AppComponent } from './app.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { ContainerComponent } from './container/container.component';

@NgModule({
  declarations: [
    AppComponent,
    UserDetailsComponent,
    ContainerComponent
  ],
  imports: [
    BrowserModule,
    UpgradeModule
  ],
  entryComponents: [
    ContainerComponent
  ]
})
export class AppModule {
  constructor(
    private upgrade: UpgradeModule
  ) { }

  ngDoBootstrap() {
    this.upgrade.bootstrap(document.body, ['sample']);
  }
}