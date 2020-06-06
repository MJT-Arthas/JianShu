import * as actionTypes from './actionTypes'
import { fromJS } from 'immutable';

const defaultState = fromJS({
  loginState: false

})

export default (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.CHANGE_LOGIN:
      return state.set('loginState', action.value)

      case actionTypes.CHANGE_LOGOUT:
        return state.set('loginState', action.value)  

    default: return state;
  }
}
