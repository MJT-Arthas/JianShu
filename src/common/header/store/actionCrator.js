import * as actionTypes from './actionTypes'
import axios from 'axios'
import { fromJS } from 'immutable';


const searchChange = (data) => ({
  type: actionTypes.SEARCH_CHANGE,
  data: fromJS(data),
  totalPage:Math.ceil(data.length/10)
})

const getListError = () => ({
  type: actionTypes.GET_LIST_ERROR,
})

export const searchFocus = () => ({
  type: actionTypes.SEARCH_FOCUS,
})

export const searchBlur = () => ({
  type: actionTypes.SEARCH_BLUR,
})

export const mouseEnter = () => ({
  type: actionTypes.MOUSE_ENTER,
})

export const mouseLeave = () => ({
  type: actionTypes.MOUSE_Leave,
})

export const changePage = (page) => ({
  type: actionTypes.CHANGE_PAGE,
  page
})


export const searchGet = () => {
  return (dispatch) => {
    axios.get('https://www.fastmock.site/mock/ecb250f1bf3586ffae6c2b8f73b718c0/headerdate/api/header')
    .then(
      (res) => {
        const data = res.data
        dispatch(searchChange(data.data))
      }
    ).catch(
      (err) => {
        dispatch(getListError())
        console.log('error')
      }
    )

  }

}