import React from 'react';
import styles from './User.module.css'
import Avatar from '@mui/material/Avatar';
import GroupIcon from '@mui/icons-material/Group';
import PersonIcon from '@mui/icons-material/Person';
import { useSelector } from "react-redux";
import {AppStateType} from "../../store/store"
import {ProfileType} from "../../store/userReducer"



export const User = () => {

    const profile = useSelector<AppStateType, ProfileType| null>(state=> state.user.profile )

    return (
     <div className={styles.user}>
    {profile!==null && 
      <>
        <Avatar sx={{ width: 280, height: 280 }} src={profile.avatar_url} /> 
        <p>{profile.name}</p>
        <a href={profile.html_url}>{profile.login}</a>
        <div className={styles.follow}>
            <div>
                <GroupIcon />
                <span>{profile.followers}</span>
            </div>
            <div>
                <PersonIcon />
                <span>{profile.following}</span>
            </div>
        </div>
      </>
    }
      </div>
    );
  }