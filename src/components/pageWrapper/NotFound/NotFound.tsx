import React from 'react';
import styles from './NotFound.module.css'
import { ReactComponent as Union } from './../../../assets/union.svg'

export const NotFound = () => {
    return (
     <div className={styles.notFound}>
        <Union />
        <p>User not found</p>
      </div>
    );
  }