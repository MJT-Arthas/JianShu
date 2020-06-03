import * as actionTypes from './actionTypes'
import axios from 'axios'
import { fromJS } from 'immutable';


// const searchChange = (data) => ({
//   type: actionTypes.SEARCH_CHANGE,
//   data: fromJS(data),
//   totalPage:Math.ceil(data.length/10)
// })

const changeHomeData = (result) => ({
  type: actionTypes.CHANGE_HOME_DATA,
  topicList: result.topicList,
  articleList: result.articleList,
  RecommendList: result.RecommendList,
  WriterList: result.WriterList,
})


const addHomeList = (result,nextPage) => ({
  type: actionTypes.ADD_HOME_LIST,
  result:fromJS(result),
  nextPage
})

export const getHomeList = () => {
  return (dispatch) => {
    axios
      // .get("https://www.fastmock.site/mock/ecb250f1bf3586ffae6c2b8f73b718c0/headerdate/homelist")
      .get("/api/homeLIst.json")
      .then((res) => {
        const result = res.data.data;
        // console.warn(result)
        const action = changeHomeData(result)
        console.warn(action.topicList)
        dispatch(action);
      })
  }
}

export const getMoreList = (page) => {
  return (dispatch)=>{
    axios
    .get("/api/homeLIstMore.json?page="+page)
    .then((res) => {
      const result = res.data.data;
      console.warn(result)
        const action = addHomeList(result,page+1)
        dispatch(action);
      })
  }
}
