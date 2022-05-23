import React from 'react';
import styles from './Header.module.css'
import { ReactComponent as GitLogo } from './../../assets/gitLogo.svg'
import { Search } from '../search/Search';

export const Header = () => {
  
    return (
     <div className={styles.header}>
        <GitLogo/>
        <Search/>
      </div>
    );
  }
