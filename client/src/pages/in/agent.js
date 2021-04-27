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

const study_matching = async ({senior,junior}) => {
    await instance.post('/login',{account:'b07901029',password:'123'})
    console.log('login success')
    const toSend = new FormData()
    toSend.append('senior',senior)
    toSend.append('junior',junior)
    return await instance.post(
        '/study_matching',
        toSend,
        { 
            "content-type": "multipart/form-data",
            responseType: 'blob' 
        }
    )
}
const matchResult = async (file)=>{
    await instance.post('/login',{account:'b07901029',password:'123'})
    console.log('login success')
    const toSend = new FormData()
    toSend.append('senior',senior)
    return await instance.post(
        '/',
        toSend,
        { 
            "content-type": "multipart/form-data",
            responseType: 'blob' 
        }
    )
}

export const study = {
    study_matching
}

export default instance