import * as actionTypes from './actionTypes'
import { fromJS } from 'immutable';

const defaultState = fromJS({
  articleList: [],
  topicList: [],
  RecommendList: [],
  articlePage: 1,
  WriterList: [],
  page:1,
  totalPage: 1,
})

export default (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.CHANGE_HOME_DATA:
      return state.merge({
        topicList: fromJS(action.topicList),
        articleList: fromJS(action.articleList),
        RecommendList: fromJS(action.RecommendList),
        WriterList: fromJS(action.WriterList),
        totalPage:action.totalPage
      })

    case actionTypes.ADD_HOME_LIST:
      return state.merge({
        articleList: state.get("articleList").concat(action.result),
        articlePage: action.nextPage
      })

    case actionTypes.SEARCH_CHANGE:
      return state.merge({
        list: action.data,
        getList: true,
        totalPage: action.totalPage
      })

    case actionTypes.CHANGE_PAGE:
      return state.set('page', action.page)


    // state.set('topicList', fromJS(action.topicList))
    
    default: return state;
  }
}