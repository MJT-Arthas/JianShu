// import * as actionTypes from './actionTypes'
import { fromJS } from 'immutable';

const defaultState = fromJS({
  detailList:
  {
    pic: "http://i1.mifile.cn/f/i/17/appdownload/download.png?",
    title:"我和婆婆"
  },

})

export default (state = defaultState, action) => {
  switch (action.type) {
    // case actionTypes.CHANGE_HOME_DATA:
    //   return state.merge({
    //     topicList: fromJS(action.topicList),
    //     articleList: fromJS(action.articleList),
    //     RecommendList: fromJS(action.RecommendList),
    //     WriterList: fromJS(action.WriterList),
    //   })
    default: return state;
  }
}