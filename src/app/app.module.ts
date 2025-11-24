import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AlbumListComponent } from './model/album-list/album-list.component';
import { CancionListComponent } from './model/cancion-list/cancion-list.component';
import { CancionCardComponent } from './model/cancion-card/cancion-card.component';
import { AlbumCardComponent } from './model/album-card/album-card.component';

@NgModule({
  declarations: [AppComponent, AlbumListComponent,CancionListComponent, CancionCardComponent, AlbumListComponent, AlbumCardComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
