import { texts } from "../../constants/texts";
import styles from "../../styles/table.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { productsState, setTargetedProducts } from "../../stores/products";
import { useEffect } from "react";

const Table = () => {
  const dispatch = useDispatch();
  const productList = useSelector(
    (state: productsState) => state.showedProducts
  );

  useEffect(() => {
    const targetedProducts = sessionStorage.getItem("targetedProducts");
    if (!targetedProducts) return;
    dispatch(setTargetedProducts(JSON.parse(targetedProducts)));
  }, [dispatch]);
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
              <p className={styles.columnText_title}>{product.title}</p>
            </div>
            <div className={styles.textContainer}>
              <p className={styles.columnText_brand}>{product.brand}</p>
            </div>

            <div className={styles.textContainer}>
              <p className={styles.columnText_description}>
                {product.description}
              </p>
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
