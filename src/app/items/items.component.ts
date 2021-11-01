import { Component, OnInit } from '@angular/core';
import { ItemsService } from 'src/_services/items.service';


@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.sass']
})
export class ItemsComponent implements OnInit {

  items: any[] = []

  constructor(
    public itemsService: ItemsService
  ) { }

  ngOnInit() {

    this.itemsService.getItems().subscribe((resp) => {

      for (let index = 0; index < resp.results.length; index++) {
        const element = resp.results[index];
        this.itemsService.getItemsDetails(element.name).subscribe((resp) => {
          this.items.push(resp)
        })

      }
    })
  }

  getItemsImage(name){

    return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/${name}.png`

  }


}
