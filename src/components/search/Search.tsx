import React, { useState } from "react";
import {IconButton, Paper} from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import styles from './Search.module.css'
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "../../store/userReducer";
import { getData } from "../../store/appReducer"
import {AppStateType} from "../../store/store"

export const Search = () => {
    const dispatch = useDispatch()
    const [value, setValue] = useState<string>('')
 
    const handleClick = (()=>{
        //@ts-ignore
        dispatch(getData(value))
    })
    const onKeyDown = (e: any) => {
        if (e.keyCode === 13) {
            handleClick()
          }
    }
    return (
        <div>
            <Paper
                elevation={0}
                component="div"
                sx={{ display: 'flex',
                    alignItems: 'center', backgroundColor: '#F9F9F9', borderRadius: '10px' }}
            >
                <IconButton type="submit" sx={{ p: '10px'}} aria-label="search" onClick={handleClick} >
                    <SearchIcon/>
                </IconButton>
                <input className={styles.input} placeholder="Enter GitHub username" value={value} onChange={(ev)=>{setValue(ev.target.value)}} onKeyDown={onKeyDown}/>
            </Paper>
        </div>

    )
}


