import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IChampion } from './champions';

@Injectable({
  providedIn: 'root'
})
export class ChampionsService {
 
  

  private readonly CHAMPION_API_URL ='api/champions';

  constructor(private http: HttpClient) { }


  public getChampionById(id : number) {
    const url = `${this.CHAMPION_API_URL}/${id}`;
    return this.http.get<IChampion>(url)
  }


   public getChampions(): Observable<IChampion[]>{
    return this.http.get<IChampion[]>(this.CHAMPION_API_URL)
  }



    public addChampions(champion : IChampion) {
    champion.id=null
    return this.http.post<IChampion>(this.CHAMPION_API_URL, champion)    
      

    }
      public updateChampions(champion: IChampion){
      const url = `${this.CHAMPION_API_URL}/${champion.id}`;
      return this.http.put<IChampion>( url  , champion)   
    }
    
      public deleteChampions(championId: number){
        const url = `${this.CHAMPION_API_URL}/${championId}`;
        return this.http.delete<IChampion>(url)
      }
    
  }
