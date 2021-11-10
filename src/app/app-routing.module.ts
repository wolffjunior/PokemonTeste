import { NavBarComponent } from './nav-bar/nav-bar.component';
import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokemonsComponent } from './pokemons/pokemons.component';
import { BerriesComponent } from './berries/berries.component';
import { ItemsComponent } from './items/items.component';

const routes: Routes = [
  {
    path: "",
    component: NavBarComponent,
    children: [
      {
      path: "pokemons",
      component: PokemonsComponent
      },
      {
      path: "berries",
      component: BerriesComponent
      },
      {
      path: "items",
      component: ItemsComponent
      }
    ]
  }
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }