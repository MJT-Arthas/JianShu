import * as actionTypes from './actionTypes'

import { fromJS } from 'immutable';

const defaultState = fromJS({
  focused: !true,
  mouseIn: false,
  getList: true,
  list: [],
  page: 1,
  totalPage: 1,

})

export default (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.SEARCH_FOCUS:
      return state.set('focused', true)

    case actionTypes.SEARCH_BLUR:
      return state.set('focused', !true)

    case actionTypes.GET_LIST_ERROR:
      return state.set('getList', !true)

    case actionTypes.MOUSE_ENTER:
      return state.set('mouseIn', true)

    case actionTypes.MOUSE_Leave:
      return state.set('mouseIn', !true)

    case actionTypes.SEARCH_CHANGE:
      return state.merge({
        list: action.data,
        getList: true,
        totalPage:action.totalPage
      })

    case actionTypes.CHANGE_PAGE:
      return state.set('page', action.page)
    default: return state;
  }
}