import ADD_TO_LIST from './constant';

const initialState = {
  lineUp: [ ]
};

const addToLineUp = (state = initialState, action) => {
	switch (action.type) {
		case ADD_TO_LIST: return{
      lineUp: [ ...state.lineUp, action.newAdd]
    };
		default: return state;
  }
}

export { addToLineUp };