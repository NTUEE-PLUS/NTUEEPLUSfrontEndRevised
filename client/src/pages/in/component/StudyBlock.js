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
    )
}