import React from "react";
import ThemeToggle from './ThemeToggle'
import {useSelector} from 'react-redux'

const HomePage=()=>{
    const theme=useSelector(state=>state.theme.mode)
    return(
        <div style={{
            backgroundColor:theme==='light'?'white':'#333',
            color:theme==='light'?'black':'white',
            height:'100vh',
            textAlign:'center',
            padding:'20px'
        }}>
            <h1>HomePage</h1>
            <ThemeToggle />

        </div>
    )
}
'