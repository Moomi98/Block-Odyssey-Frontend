import { MouseEventHandler, useEffect, useState } from "react";
import { texts } from "../../constants/texts";
import styles from "../../styles/pagination.module.scss";
import Select from "../Select";
import { useDispatch, useSelector } from "react-redux";
import {
  productsState,
  setPerPage,
  setShowedProducts,
} from "../..//stores/products";
interface paginationProps {
  onPerPageChange?: MouseEventHandler;
  onPageChange?: MouseEventHandler;
}

const Pagination = (props: paginationProps) => {
  const pageOption = [10, 20, 50];
  const { products, perPage } = useSelector((state: productsState) => state);
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
        <span className={`material-symbols-outlined ${styles.button}`}>
          chevron_left
        </span>
        {pageArray.map((page) => (
          <button key={page} className={styles.button}>
            {page}
          </button>
        ))}
        <span className={`material-symbols-outlined ${styles.button}`}>
          chevron_right
        </span>
      </div>
    </section>
  );
};

export default Pagination;
