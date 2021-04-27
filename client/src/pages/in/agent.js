import axios from 'axios'

const API_ROOT = 'http://localhost:1993/api'//'https://eeplus-back.herokuapp.com/api/'//
const instance = axios.create({
  baseURL: API_ROOT,
  withCredentials: true
})
const backCatch = e => {
    console.log('backend err',e?.response?.data?.msg)
    return {data:{}}
}


