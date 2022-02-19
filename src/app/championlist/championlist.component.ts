
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ColDef } from 'ag-grid-community';

import championList from './champion.json';


interface Champion{
  tags: Array<string>;
  title: string;
  id: number;
  key: string;
  name: string;
}

@Component({
  selector: 'app-championlist',
  templateUrl: './championlist.component.html',
  styleUrls: ['./championlist.component.css']
})
export class ChampionlistComponent implements OnInit {

  

  columnDefs: ColDef[] =[
    {headerName: "Id", field:"id"},
    {headerName: "Name", field:"name"},
    {headerName: "Title", field:"title"},
    {headerName: "Tags", field:"tags"},
    {headerName: "Key", field:"key"}
  ]; 
  rowData: Observable<any[]>;

  constructor(private http: HttpClient) {
    this.rowData = this.http.get<any[]>('https://raw.githubusercontent.com/zizo2k21/angular_app/develop/src/app/championlist/champion.json');
}
  champion:Champion[]= championList;

  

 /* rowData=[      
    {id: this.champion.[i].id, 
    name: this.champion.[i].name,
    title: this.champion[i].title, 
    tags: this.champion[i].tags ,
    key: this.champion.[i].key},
    ];
*/

  ngOnInit(): void {
    
    
}
}
