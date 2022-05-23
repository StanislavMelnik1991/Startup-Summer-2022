import React from 'react';
import styles from './Initial.module.css'
import { ReactComponent as Search } from './../../../assets/search.svg'

export const Initial = () => {
    return (
     <div className={styles.initial}>
        <Search />
        <p>Start with searching<br/>a GitHub user</p>
      </div>
    );
  }