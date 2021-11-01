import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { from, Observable } from 'rxjs';
import { map, mergeMap } from 'rxjs/operators';
import { Berries } from 'src/_model/Berries';

@Injectable({
    providedIn: 'root',
})
export class BerriesService {

    public berries: Berries[] = [];
    

    constructor(
        private httpClient: HttpClient,
    ) { }

    getBerries() {

        return this.httpClient.get<any>('https://pokeapi.co/api/v2/berry/');
        

    }

    getBerrieDetails(name: string):Observable<any>{

        return this.httpClient.get<any>(`https://pokeapi.co/api/v2/berry/${name}`)

    }


}