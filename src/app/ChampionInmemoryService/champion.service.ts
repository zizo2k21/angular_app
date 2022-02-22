import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { IChampion } from '../championlist/champions';
import * as champion  from 'src/api/champion.json'
@Injectable({
  providedIn: 'root'
})
export class ChampionService implements InMemoryDbService {
  constructor() { }
  createDb() {
    return {champions:(champion as any).default}
}}