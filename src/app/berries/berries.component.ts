import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { map, mergeMap } from 'rxjs/operators';
import { Berries } from 'src/_model/Berries';
import { BerriesService } from 'src/_services/berries.service';

@Component({
    selector: 'app-berries',
    templateUrl: './berries.component.html',
    styleUrls: ['./berries.component.sass']
})
export class BerriesComponent implements OnInit {
    berries : any[] = [];

    constructor(
        public berriesService: BerriesService
    ) { }


    ngOnInit() {

        this.berriesService.getBerries().subscribe((resp) => {

            for (let index = 0; index < resp.results.length; index++) {
                const element = resp.results[index];
                this.berriesService.getBerrieDetails(element.name).subscribe((resp) => {
                    this.berries.push(resp)
                })
                
            }
        })

    }

    getBerriesImage(name) {

        // console.log(`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/itens/berries/${name}.png`);
        return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/berries/${name}.png`;
    } 

}
