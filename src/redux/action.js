import {ADD_INFO, REMOVE_POKE }from './constant';

const addInfo = pokeInfo => ({
	type: ADD_INFO,
	pokeInfo,
});

const remove = id => ({
	type: REMOVE_POKE,
	id,
});


export { addInfo, remove};