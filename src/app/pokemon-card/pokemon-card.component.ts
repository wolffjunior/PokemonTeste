import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { PokemonService } from 'src/_services/pokemon.service';
import { Pokemon } from '../../_model/Pokemon';
import { getPokemonImage } from 'src/_services/utils';

@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.sass'],
})
export class PokemonCardComponent implements OnInit {

  @Input()
  public pokemon: Pokemon;

  @Output()
  public selectedPokemon = new EventEmitter<any>();

  constructor(
    private pokemonService:PokemonService
  ) { }

  ngOnInit(): void {
    this.pokemonService.findByName(this.pokemon.name).subscribe(resp => {
      this.pokemon = ({
        ...this.pokemon,
        ...resp,
        imageUrl: getPokemonImage(String(resp.id).padStart(3, '0'))
      });
    });
  }

  selectPokemon() {
    this.selectedPokemon.emit(this.pokemon);
  }

}
