import { Component, OnInit, Input } from '@angular/core';
import { getPokemonImage, getPokemonNumber, Pokemon } from '../../_model/Pokemon';
import { PokemonService } from '../../_services/pokemon.service';


@Component({
  selector: 'app-pokemons',
  templateUrl: './pokemons.component.html',
  styleUrls: ['./pokemons.component.sass']
})
export class PokemonsComponent  {

  constructor(
    public pokemonService: PokemonService,
  ) {
  }

  @Input()
  public pokemon: Pokemon;

  public getPokemonImage = getPokemonImage;

  public getPokemonNumber = getPokemonNumber;

}
