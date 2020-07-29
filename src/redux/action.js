import ADD_TO_LIST from './constant';

const addToList = newAdd => ({
	type: ADD_TO_LIST,
	newAdd,
});

export { addToList };