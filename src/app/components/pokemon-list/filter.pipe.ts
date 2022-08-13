import { Pipe, PipeTransform } from '@angular/core';
import { PokemonDetail } from 'src/app/models/pokemon.detail';

@Pipe({
  name: 'searchFilter',
})
export class SearchFilterPipe implements PipeTransform {
  transform(pokemons: PokemonDetail[], searchFor: string) {
    if (!pokemons) {
      return [];
    }
    if (searchFor === '' || !searchFor) {
      return pokemons;
    }
    return pokemons.filter(
      (pokemon) =>
        pokemon.name.toLowerCase().indexOf(searchFor.toLowerCase()) > -1 ||
        pokemon.id.toString().indexOf(searchFor) > -1
    );
  }
}
