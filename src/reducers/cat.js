import * as constants from '../constants/constants';

const initialState = {
  fetching: false,
  cat: null,
  error: null
};

export default (state = initialState, action) => {
  const { type } = action;
  switch (type) {
    case constants.GET_KOSHA_REQUEST:
      return { 
        ...state, 
        fetching: true, 
        cat: null,
        error: null 
      };

    case constants.GET_KOSHA_SUCCESS:
      return { 
        ...state, 
        fetching: false, 
        cat: action.cat 
      };

    case constants.GET_KOSHA_FAILURE:
      return { 
        ...state, 
        fetching: false, 
        cat: null, 
        error: action.error 
      };

    default:
      return state;
  }
};