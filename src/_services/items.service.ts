import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { from, Observable } from 'rxjs';
import { map, mergeMap } from 'rxjs/operators';
import { Items } from 'src/_model/Items';

@Injectable({
    providedIn: 'root',
})
export class ItemsService {

    public items: Items[] = [];
    

    constructor(
        private httpClient: HttpClient,
    ) { }

    getItems() {

        return this.httpClient.get<any>('https://pokeapi.co/api/v2/item/');
        

    }

    getItemsDetails(name: string):Observable<any>{

        return this.httpClient.get<any>(`https://pokeapi.co/api/v2/item/${name}`)

    }


}