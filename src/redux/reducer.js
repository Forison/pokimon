import { ADD_INFO, REMOVE_POKE } from './constant';


const initialState = {
  pokemon: [],
};

const addToLineUp = (state = initialState, action) => {
	switch (action.type) {
    case ADD_INFO: return{
      pokemon: [ ...state.pokemon, action.pokeInfo],
    };
    case REMOVE_POKE: return {
      pokemon: [...state.pokemon.filter((val,index)=> index !== action.id)],
    };
		default: return state;
  }
}

export { addToLineUp };