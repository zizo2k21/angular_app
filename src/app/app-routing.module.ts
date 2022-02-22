import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import  {ChampionEditComponent} from './champion-edit/champion-edit.component';
import {ChampionlistComponent} from './championlist/championlist.component';
import { BtnCellRenderer } from './championlist/button-cell-renderer.component';

const routes: Routes = [
  {path : 'champion-edit/:id', component: ChampionEditComponent },
  {path : 'championlist', component: ChampionlistComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
