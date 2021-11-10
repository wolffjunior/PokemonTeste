import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';  
import { AppComponent } from './app.component';
import { PokemonCardComponent } from './pokemon-card/pokemon-card.component';
import { PokemonService } from '../_services/pokemon.service';
import { HttpClientModule } from '@angular/common/http';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { BerriesComponent } from './berries/berries.component';
import { ItemsComponent } from './items/items.component';
import { PokemonsComponent } from './pokemons/pokemons.component';
import { BerriesCardComponent } from './berries-card/berries-card.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    PokemonCardComponent,
    NavBarComponent,
    BerriesComponent,
    ItemsComponent,
    PokemonsComponent,
    BerriesCardComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    Ng2SearchPipeModule,
    FormsModule,
  ],
  providers: [
    PokemonService,
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {
}
