import type { NamedRoute } from "../shared/named-route";
import type { PagedList } from "../shared/pagedList";

interface PokemonReference extends NamedRoute {
  
}

export interface PokemonListResponse extends PagedList<PokemonReference> {
 
}