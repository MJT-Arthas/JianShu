import * as actionTypes from './actionTypes'
import axios from 'axios'
// import { fromJS } from 'immutable';


const changeLoginIn = () => ({
  type: actionTypes.CHANGE_LOGIN,
  value: true
})

export const changeLogout = () => ({
  type: actionTypes.CHANGE_LOGOUT,
  value: false
})


export const LoginList = (account, password) => {
  return (dispatch) => {
    axios.get(`/api/login.json?account=${account}&password=${password}`)
      .then((res) => {
        const result = res.data.data
        if (result) {
          dispatch(changeLoginIn())
        } else {
          alert("登录失败")
        }
      })
  }
}

