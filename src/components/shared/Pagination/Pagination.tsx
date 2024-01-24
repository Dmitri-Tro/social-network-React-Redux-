import React, {FC, memo} from "react";
import styles from "./Pagination.module.css"

type PaginationProps = {
    pagesCount: number
    currentPage: number
    onFirstPageClick: () => void
    onPageClick: (p: number) => void
    onLastPageClick: () => void
}
export const Pagination: FC<PaginationProps> = memo(({
                                                         pagesCount,
                                                         currentPage,
                                                         onFirstPageClick,
                                                         onPageClick,
                                                         onLastPageClick
                                                     }) => {
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }
    return (
        <div className={styles.pages}>
                <span
                    className={styles.pagesCount + ' ' + (currentPage > 3 ? styles.visiblePage : styles.hiddenPage)}
                    onClick={onFirstPageClick}>
                    1 ...
                </span>

            {pages.map(p => <span key={p}
                                  className={currentPage === p ? styles.activePage
                                      : ((currentPage - 2) <= p && p <= (currentPage + 2)) ? styles.visiblePage
                                          : styles.hiddenPage}
                                  onClick={() => onPageClick(p)}>
                {p}
            </span>)}

            <span
                className={styles.pagesCount + ' ' + (currentPage < pagesCount - 3 ? styles.visiblePage : styles.hiddenPage)}
                onClick={onLastPageClick}>
                    ... {pagesCount}
                </span>
        </div>
    )
});