import React, {useState, useEffect} from 'react';
import styles from './Repositories.module.css'
import Paper from '@mui/material/Paper';
import { Pagination } from '../pagination/Pagination';
import {AppStateType} from '../../store/store';
import {RepoType} from '../../store/repositoriesReducer'
import { useSelector } from "react-redux";




const Repo = ({name, description, html_url, ...props}: RepoType) => {
    return (
     <Paper elevation={0} className={styles.repo}>
       <a href={html_url} target="_blank" rel="index noreferrer">{name}</a>
       <p>{description}</p>
      </Paper>
    );
  }


export const Repositories = () => {
    const repos = useSelector<AppStateType, RepoType[]|null>(state=> state.repos.repos )
    const itemsPerPage = 4
    
    const  items = repos ? [...repos] : []
 
    
    const [currentItems, setCurrentItems] = useState<RepoType[] | null>(null);
    const [pageCount, setPageCount] = useState(0);
    const [itemOffset, setItemOffset] = useState(0);
  
    useEffect(() => {
      const endOffset = itemOffset + itemsPerPage;
      setCurrentItems(items.slice(itemOffset, endOffset));
      setPageCount(Math.ceil(items.length / itemsPerPage));
    }, [itemOffset, itemsPerPage, repos]);
  
    const handlePageClick = (event: any) => {
      const newOffset = (event.selected * itemsPerPage) % items.length;
      
      setItemOffset(newOffset);
    } 

    return (
     <div className={styles.repositories}>
        <h2>Repositories {repos && `(${repos.length})`}</h2> 
        <div className={styles.container}>
            {  currentItems &&
                currentItems.map(({description, id, name, html_url}) => {
                    return <Repo description={description} id={id} name={name} html_url={html_url} key={id}/>
                })
            }
        </div>
        <Pagination onPageChange={handlePageClick} pageCount={pageCount}/>
      </div>
    );
  }