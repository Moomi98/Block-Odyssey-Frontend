import { texts } from "../../constants/texts";
import styles from "../../styles/table.module.scss";
import { useSelector } from "react-redux";
import { productsState } from "../../stores/products";

const Table = () => {
  const productList = useSelector(
    (state: productsState) => state.showedProducts
  );
  return (
    <section className={styles.container}>
      <div className={styles.column}>
        <p className={styles.divisionText}>{texts.productNumber}</p>
        <p className={styles.divisionText}>{texts.productName}</p>
        <p className={styles.divisionText}>{texts.brandName}</p>
        <p className={styles.divisionText}>{texts.productContent}</p>
        <p className={styles.divisionText}>{texts.price}</p>
        <p className={styles.divisionText}>{texts.grade}</p>
        <p className={styles.divisionText}>{texts.stock}</p>
      </div>
      <div className={styles.productlist}>
        {productList.map((product, index) => (
          <div key={index} className={styles.column}>
            <div className={styles.textContainer}>
              <p className={styles.columnText}>{product.id}</p>
            </div>
            <div className={styles.textContainer}>
              <p className={styles.columnText}>{product.title}</p>
            </div>
            <div className={styles.textContainer}>
              <p className={styles.columnText}>{product.brand}</p>
            </div>

            <div className={styles.textContainer}>
              <p className={styles.columnText}>{product.description}</p>
            </div>
            <div className={styles.textContainer}>
              <p className={styles.columnText}>{product.price}</p>
            </div>
            <div className={styles.textContainer}>
              <p className={styles.columnText}>{product.rating}</p>
            </div>
            <div className={styles.textContainer}>
              <p className={styles.columnText}>{product.stock}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Table;
