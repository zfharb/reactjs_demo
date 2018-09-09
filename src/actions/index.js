import * as actionType from './action-type';
import axios from 'axios';

const SIGNIN_URL = ``

export const singin  = (userName, password) => {

  const url = `${SIGNIN_URL}&${userName}&${password}`;
  const request = axios.get(url);


return {
      type: actionType.SIGNIN,
      payload: request
      }

};

