import { Component, Input, OnInit } from '@angular/core';
import { BerriesService } from 'src/_services/berries.service';

@Component({
  selector: 'app-berries-card',
  templateUrl: './berries-card.component.html',
  styleUrls: ['./berries-card.component.sass']
})
export class BerriesCardComponent implements OnInit {

  @Input()
    public berries: any | null = null

  constructor(
    private berrieService: BerriesService
  ) { }

  ngOnInit(): void {
    this.berrieService.getBerrieDetails(this.berries.name).subscribe(resp => {
      this.berries = ({
        ...this.berries,
        ...resp
      })
      console.log(this.berries)
    })
  }

    getBerriesImage() {
      return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/itens/berries/${this.berries.name}-berry.png`;
}

  
}
