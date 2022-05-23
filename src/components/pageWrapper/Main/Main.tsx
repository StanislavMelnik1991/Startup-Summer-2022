import React from 'react';
import styles from './Main.module.css'
import { User } from '../../user/User';
import { Repositories } from '../../repositories/Repositories';

export const Main = () => {
    return (
     <div className={styles.main}>
        <User />
        <Repositories />
      </div>
    );
  }