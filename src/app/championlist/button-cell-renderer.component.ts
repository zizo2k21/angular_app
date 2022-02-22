import { Component, OnDestroy } from "@angular/core";
import { ICellRendererAngularComp } from "ag-grid-angular";
import { ICellRendererParams } from "ag-grid-community";
import { IChampion } from "./champions";
import { ChampionsService } from "./champions.service";
import { Router } from '@angular/router';




@Component({
    selector: 'btn-cell-renderer',
    template: `
      <button  (click)="btnClickedHandler($event)">Modifier</button>
    `,
  })
  export class BtnCellRenderer implements ICellRendererAngularComp, OnDestroy {
    
      refresh(params: ICellRendererParams): boolean {
      throw new Error("Method not implemented.");
    }
    private params: any;
  
    agInit(params: any): void {
      this.params = params;
    }
    constructor(private router: Router) {

    }
  
    btnClickedHandler(p:any) {
      console.log(p,this.params);
  
      
      this.params.clicked(this.params.data.id);
    }
  
    ngOnDestroy() {
      // no need to remove the button click handler 
      // https://stackoverflow.com/questions/49083993/does-angular-automatically-remove-template-event-listeners
    }
  }