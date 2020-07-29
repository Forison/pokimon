const ADD_TO_LIST = 'ADD_TO_LIST';

const addToList = newAdd => ({
	type: ADD_TO_LIST,
	...newAdd,
});

export { addToList };