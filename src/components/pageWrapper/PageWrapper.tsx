import React, { useEffect } from 'react';
import styles from './PageWrapper.module.css'
import { Initial } from './Initial/Initial';
import { Main } from './Main/Main';
import { NotFound } from './NotFound/NotFound';
import { useSelector } from "react-redux";
import {AppStateType} from "../../store/store"

export const PageWrapper = () => {
  const profile = useSelector<AppStateType, any>(state=> state.user.profile )
  const status = useSelector<AppStateType, string>(state=> state.app.status )
  
    return (
     <div className={styles.wrapper}>
       { profile 
       ? <Main />
       : <NotFound />}
      </div>
    );
  }