import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Pokemon } from '../_model/Pokemon';
import { from, Observable } from 'rxjs';
import { map, mergeMap } from 'rxjs/operators';
import { apiUrl } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {

  constructor(
    private httpClient: HttpClient,
  ) { }

  findAll(): Observable<any> {
    return this.httpClient.get<any>(`${apiUrl}/pokemon?limit=151`);
  }

  findByName(name:string): Observable<any> {
    return this.httpClient.get<any>(`${apiUrl}/pokemon/${name}`);
  }

}
