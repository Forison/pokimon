import ADD_INFO from './constant';

const addInfo = pokeInfo => ({
	type: ADD_INFO,
	pokeInfo,
});

export { addInfo };