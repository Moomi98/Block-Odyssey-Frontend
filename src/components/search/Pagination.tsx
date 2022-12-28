import { MouseEventHandler, useEffect, useState } from "react";
import { texts } from "../../constants/texts";
import styles from "../../styles/pagination.module.scss";
import Select from "../Select";
import { useDispatch, useSelector } from "react-redux";
import {
  productsState,
  setCurrentPage,
  setPerPage,
  setShowedProducts,
} from "../..//stores/products";
interface paginationProps {
  onPerPageChange?: MouseEventHandler;
  onPageChange?: MouseEventHandler;
}

const Pagination = (props: paginationProps) => {
  const pageOption = [10, 20, 50];
  const { products, perPage, currentPage } = useSelector(
    (state: productsState) => state
  );
  const dispatch = useDispatch();

  const [pageArray, setPageArray] = useState<number[]>([]);

  useEffect(() => {
    const pageLength = Math.floor(products.length / perPage);
    const buttonArr = [];
    for (let i = 1; i <= pageLength; i++) {
      buttonArr.push(i);
    }

    setPageArray(buttonArr);
  }, [products, perPage]);

  const changePerPage = (page: number) => {
    dispatch(setPerPage(page));
    dispatch(setCurrentPage(1));

    dispatch(setShowedProducts());
  };

  const changeCurrentPage = (event: React.MouseEvent<HTMLButtonElement>) => {
    const value = event.currentTarget.value;
    dispatch(setCurrentPage(Number(value)));
    dispatch(setShowedProducts());
  };

  const movePageForward = () => {
    const pageLength = Math.floor(products.length / perPage);
    if (pageLength < currentPage + 1) return;
    dispatch(setCurrentPage(currentPage + 1));
    dispatch(setShowedProducts());
  };

  const movePageBack = () => {
    if (currentPage - 1 < 1) return;
    dispatch(setCurrentPage(currentPage - 1));
    dispatch(setShowedProducts());
  };

  const movePageFirst = () => {
    dispatch(setCurrentPage(1));
    dispatch(setShowedProducts());
  };

  const movePageLast = () => {
    const pageLength = Math.floor(products.length / perPage);
    dispatch(setCurrentPage(pageLength));
    dispatch(setShowedProducts());
  };

  return (
    <section className={styles.container}>
      <div className={styles.perPageContainer}>
        {texts.perPage}
        <Select options={pageOption} onChange={changePerPage} />
      </div>
      <div className={styles.pageContainer}>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0"
        />
        <span
          className={`material-symbols-outlined ${styles.button}`}
          onClick={movePageFirst}
        >
          first_page
        </span>
        <span
          className={`material-symbols-outlined ${styles.button}`}
          onClick={movePageBack}
        >
          chevron_left
        </span>
        {pageArray.map((page) => (
          <button
            key={page}
            className={styles.button}
            value={page}
            onClick={changeCurrentPage}
          >
            {page}
          </button>
        ))}
        <span
          className={`material-symbols-outlined ${styles.button}`}
          onClick={movePageForward}
        >
          chevron_right
        </span>
        <span
          className={`material-symbols-outlined ${styles.button}`}
          onClick={movePageLast}
        >
          last_page
        </span>
      </div>
    </section>
  );
};

export default Pagination;
