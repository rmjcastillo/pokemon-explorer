import type { NamedRoute } from "../shared/named-route";
import type { PagedList } from "../shared/pagedList";

interface PokemonSpecies extends NamedRoute {
}

export interface PokemonSpeciesListResponse extends PagedList<PokemonSpecies> {
}

