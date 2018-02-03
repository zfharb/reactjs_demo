import * as actionType from './ActionType';

/*export const addCounter = () => ({
  type: actionType.ADD_COUNTER,
  payload: 1
});*/


export const addCounter  = () => ({
  		type: actionType.ADD_COUNTER,
  		payload: 1
});



export const removeCounter = () => ({
  type: actionType.REMOVE_COUNTER,
  payload: 1
});


export const counterMiddleware = store => next => action => {
	console.log('starting middleware')
  if (action.type === actionType.ADD_COUNTER) {
  		console.log('inside middleware');

    	() => store.dispatch(addCounter());
      	console.log(' done');
  } 

  next(action);
  
};