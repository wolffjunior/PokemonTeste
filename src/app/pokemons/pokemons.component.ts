import { Component, OnInit, Input } from '@angular/core';
import { PokemonService } from '../../_services/pokemon.service';


@Component({
  selector: 'app-pokemons',
  templateUrl: './pokemons.component.html',
  styleUrls: ['./pokemons.component.sass']
})
export class PokemonsComponent implements OnInit {

  public pokemons: Array<any>;
  public selectedPokemon:any;

  constructor(
    public pokemonService: PokemonService,
  ) { }

  ngOnInit(): void {
    this.selectedPokemon = null;
    this.pokemonService.findAll().subscribe(({results}: any) => {
      this.pokemons = results;
    });
  }

  test(pokemon:any) {
    this.selectedPokemon = this.selectedPokemon !== pokemon ? pokemon : null;
    console.log(this.selectedPokemon);
  }

}
