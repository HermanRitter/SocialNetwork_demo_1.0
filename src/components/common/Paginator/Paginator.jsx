import styles from "../../common/Paginator/Paginator.module.css";
import React from "react";

export let Paginator = ({totalUsersCount, pageSize, currentPage, onPageChanged,...props}) => {

    let pagesCount = Math.ceil(totalUsersCount / pageSize);

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return (
        <div>
            {
                pages.map(p => {
                    return <span className={currentPage === p && styles.selectedPage}
                                 onClick={(e) => {
                                     onPageChanged(p)
                                 }}>{p}</span>
                })
            }
        </div>)
}

