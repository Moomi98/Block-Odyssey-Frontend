import { useState } from "react";
import { texts } from "../../constants/texts";
import styles from "../../styles/pagination.module.scss";
import Select from "../Select";

interface paginationProps {
  pages: number;
}

const Pagination = ({ pages }: paginationProps) => {
  const pageOption = [10, 20, 50];
  const [pageArray, setPageArray] = useState(new Array(pages).fill(0));
  return (
    <section className={styles.container}>
      <div className={styles.perPageContainer}>
        {texts.perPage}
        <Select options={pageOption} />
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
        {pageArray.map((page, index) => (
          <button className={styles.button}>{index + 1}</button>
        ))}
        <span className={`material-symbols-outlined ${styles.button}`}>
          chevron_right
        </span>
      </div>
    </section>
  );
};

export default Pagination;
