import styled from '@emotion/styled';
import React, { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import styles from './Pagination.module.css'
import { ReactComponent as NextIcon } from './../../assets/next.svg'
import { ReactComponent as PrewIcon } from './../../assets/prev.svg'
import {AppStateType} from '../../store/store';
import {RepoType} from '../../store/repositoriesReducer'
import { useSelector } from "react-redux";

type PaginatedItemsProps = {
    onPageChange: (event: any)=> void,
    pageCount: number
}

export function Pagination ({ onPageChange, pageCount }: PaginatedItemsProps) {

  return (
      <ReactPaginate
        breakLabel="..."
        nextLabel={<NextIcon />}
        onPageChange={onPageChange}
        pageRangeDisplayed={10}
        pageCount={pageCount}
        previousLabel={<PrewIcon />}
        containerClassName={styles.container}
        pageClassName={styles.pageItem}
        previousClassName={styles.pageItem}
        nextClassName={styles.pageItem}
        activeClassName={styles.activePage}
      />
  );
}