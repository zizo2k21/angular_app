import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {AgGridModule} from 'ag-grid-angular';
import { HttpClientModule } from '@angular/common/http';
import { ChampionlistComponent } from './championlist/championlist.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
 import { HeaderComponent } from './header/header.component';
import { ChampionEditComponent } from './champion-edit/champion-edit.component';
import { ReactiveFormsModule } from '@angular/forms';

import { ChampionService } from './ChampionInmemoryService/champion.service';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { BtnCellRenderer } from './championlist/button-cell-renderer.component';

@NgModule({
  declarations: [
    AppComponent,
    ChampionlistComponent,
    HeaderComponent,
    ChampionEditComponent,
    BtnCellRenderer,
    
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AgGridModule.withComponents([BtnCellRenderer]),
    AppRoutingModule,
    BrowserAnimationsModule, 
    MatToolbarModule,
    MatIconModule,
    ReactiveFormsModule,
    MatButtonModule,
    HttpClientInMemoryWebApiModule.forRoot(ChampionService),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
