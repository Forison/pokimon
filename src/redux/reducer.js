import ADD_INFO from './constant';

const initialState = {
  pokemon: []
};

const addToLineUp = (state = initialState, action) => {
	switch (action.type) {
    case ADD_INFO: return{
      pokemon: [ ...state.pokemon, action.pokeInfo]
    };
		default: return state;
  }
}

export { addToLineUp };