import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ColDef } from 'ag-grid-community';
import { ChampionsService } from './champions.service';
import { BtnCellRenderer } from './button-cell-renderer.component';
import { BtnSuppRenderer } from './button-supp-renderer.component';
import { IChampion } from '../championlist/champions';
import { ActivatedRoute, Router } from '@angular/router';


/*interface Champion{
  tags: Array<string>;
  title: string;
  id: number;
  key: string;
  name: string;
}*/

@Component({
  selector: 'app-championlist',
  templateUrl: './championlist.component.html',
  styleUrls: ['./championlist.component.css'],
})
export class ChampionlistComponent implements OnInit {
  champion : IChampion |any
  constructor(
    private championService: ChampionsService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  columnDefs: ColDef[] = [
    { headerName: 'Id', field: 'id' },
    { headerName: 'Name', field: 'name' },
    { headerName: 'Title', field: 'title' },
    { headerName: 'Tags', field: 'tags' },
    { headerName: 'Key', field: 'key' },
    {
      headerName: 'Edit',
      field: 'Edit',
      cellRenderer: 'btnCellRenderer',
      cellRendererParams: {
        clicked: (field: any) => {
          this.router.navigate([`champion-edit/${field}`]);
          console.log(field);

          // alert(`${field} was clicked`);
        },
      },
      minWidth: 150,
    },
    {
      headerName: 'Delete',
      field: 'Delete',
      cellRenderer: 'btnSuppRenderer',
      cellRendererParams: {
        clicked: (field: any) => {

              console.log(field);
                this.deleteChampion(field)
          

          // alert(`${field} was clicked`);
        },
      },
      minWidth: 150,
    },
  ];

  frameworkComponents = {
    btnCellRenderer: BtnCellRenderer,
    btnSuppRenderer: BtnSuppRenderer,
  };

  rowData: Observable<any[]> | undefined;

  ngOnInit(): void {
    
        
    this.getList()
   
  }

  getList(){
    this.rowData = this.championService.getChampions();
  }
  deleteChampion(championId: number){
    this.championService
    .deleteChampions(championId)
    .subscribe((chp) =>{
      console.log('deleting champion ',chp);
    this.getList()
    });
  }
  
  
 

  

  
}
