import * as actionTypes from './actionTypes'
import { fromJS } from 'immutable';

const defaultState = fromJS({
  articleList: [],
  topicList: [],
  RecommendList: [],
  WriterList: [],
  articlePage:1,
})

export default (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.CHANGE_HOME_DATA:
      return state.merge({
        topicList: fromJS(action.topicList),
        articleList: fromJS(action.articleList),
        RecommendList: fromJS(action.RecommendList),
        WriterList: fromJS(action.WriterList),
      })

    case actionTypes.ADD_HOME_LIST:
      return state.merge({
        articleList:state.get("articleList").concat(action.result),
        articlePage:action.nextPage
      })
      


    // state.set('topicList', fromJS(action.topicList))

    default: return state;
  }
}