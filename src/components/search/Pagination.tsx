import { useEffect, useState } from "react";
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

const Pagination = () => {
  const pageOption = [10, 20, 50];
  const { products, perPage, currentPage, showedProducts, targetedProducts } =
    useSelector((state: productsState) => state);
  const dispatch = useDispatch();

  const [pageArray, setPageArray] = useState<number[]>([]);

  useEffect(() => {
    const pageLength = Math.ceil(targetedProducts.length / perPage);
    const buttonArr = [];
    for (let i = 1; i <= pageLength; i++) {
      buttonArr.push(i);
    }

    setPageArray(buttonArr);
  }, [products, perPage, targetedProducts]);

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
    const pageLength = Math.floor(targetedProducts.length / perPage);
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
    const pageLength = Math.floor(targetedProducts.length / perPage);
    dispatch(setCurrentPage(pageLength));
    dispatch(setShowedProducts());
  };

  const checkButtonShow = () => {};

  return (
    <section className={styles.container}>
      <div className={styles.perPageContainer}>
        <p>{texts.perPage}</p>
        <Select options={pageOption} onChange={changePerPage} width={70} />
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
            className={
              page === currentPage ? styles.button_currentPage : styles.button
            }
            value={page}
            onClick={changeCurrentPage}
            // style={{
            //   display: currentPage > 4 && currentPage < 7 ? "block" : "none",
            // }}
          >
            {page}
          </button>
        ))}
        {/* {currentPage < Math.floor(products.length / perPage) - 3 && (
          <span className="material-symbols-outlined">more_horiz</span>
        )} */}
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
