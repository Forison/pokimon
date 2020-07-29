const initialState = {
  lineUp: []
};

const addToLineUp = (state = initialState, action) => {
	switch (action.type) {
		case 'ADD_TO_LIST': return {
      ...state,
      lineUp: [ action.lineUp ]
		};
		default: return state;
  }
}

export { addToLineUp };