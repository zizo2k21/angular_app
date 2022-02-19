import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ColDef } from 'ag-grid-community';


import champion from './_files/champion.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my_app';

 /* columnDefs: ColDef=[
    {headerName: "Make", field:"make"},
    {headerName: "Model", field:"model"},
    {headerName: "Price", field:"price"}
  ]; 
  
  rowData=[
    {make: 'Toyota', model: 'Corrola', price:35000},
    {make: 'Ford', model: 'Mondeo', price:32000},
    {make: 'Porche', model: 'Boxter', price:72000},
  ]*/
}
