import addCounter from './actions/index';

import * as actionType from './ActionType';

// function fetchSomething() {
//   return 1;
// }


// function addCounterMiddleware() {

// 	return function (dispatch) {
// 	    return fetchSomething().then(
// 	      result => dispatch(addCounter(result))
// 	    );
// 	  };
// }

// export const counterMiddleware = store => next => action => {
// 	console.log('starting middleware')
//   if (action.type === actionType.ADD_COUNTER) {
//   		console.log('inside middleware');

//     	() => store.dispatch(addCounter());
//       	console.log(' done');
//   } 

//   next(action);
  
// };
