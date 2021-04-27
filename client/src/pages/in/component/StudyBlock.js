import React, { Component, useState } from 'react'
import {study} from '../agent'

export const Match = () => {
    const [senior,setSenior] = useState('')
    const [junior,setJunior] = useState('')
    const handleSubmit = async (e)=>{
        e.preventDefault()
        if(senior==='' || junior==='') return
        try{
            const {data} = await study.study_matching({senior,junior})
            const url = window.URL.createObjectURL(new Blob([data]));
            const link = document.createElement('a');
            link.href = url;
            link.setAttribute('download', 'file.xlsx'); //or any other extension
            document.body.appendChild(link);
            link.click();
        }catch(e){
            alert('error occur')
        }
    }
    const handleSenior = (e)=>{
        const file = e.target.files[0]
        setSenior(file)
    }
    const handleJunior = (e)=>{
        const file = e.target.files[0]
        setJunior(file)
    }
    return(
        <div >
            <a href='https://hackmd.io/@BLGpkBRgRt--owIQaUv69Q/B1zGZZeDu'>
                格式規定
            </a>
            <form onSubmit={handleSubmit}>
                <label>
                學長姐資料:
                <input type="file" onChange={handleSenior} />
                </label>
                <br />
                <label>
                學弟妹資料:
                <input type="file" onChange={handleJunior} />
                </label>
                <br />
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export const Mail = () => {
    
    const [matchResult,setResult] = useState('')
    const handleSubmit = async (e)=>{
        e.preventDefault()
        if(matchResult==='') return
        try{
            const {data} = await study.study_matching({senior: matchResult,junior})
            const url = window.URL.createObjectURL(new Blob([data]));
            const link = document.createElement('a');
            link.href = url;
            link.setAttribute('download', 'file.xlsx'); //or any other extension
            document.body.appendChild(link);
            link.click();
        }catch(e){
            alert('error occur')
        }
    }
    const handleMail = (e)=>{
        const file = e.target.files[0]
        setResult(file)
    }
    return(
        <div >
            自動寄信：寄送留學配對結果信件
            <a href='https://hackmd.io/@BLGpkBRgRt--owIQaUv69Q/B1zGZZeDu'>
                格式規定
            </a>
            <form onSubmit={handleSubmit}>
                <label>
                檔案:
                <input type="file" onChange={handleMail} />
                </label>
                <br />
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}