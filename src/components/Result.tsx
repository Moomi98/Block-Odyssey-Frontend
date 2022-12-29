import { texts } from "../constants/texts";
import styles from "../styles/result.module.scss";
import { useSelector } from "react-redux";
import { productsState } from "../stores/products";

const Result = () => {
  const productList = useSelector(
    (state: productsState) => state.targetedProducts
  );
  return (
    <section className={styles.container}>
      <p className={styles.text}>{texts.searchedData}</p>
      <p className={styles.resultNumber}>{productList.length}</p>
      <p className={styles.text}>{texts.count}</p>
    </section>
  );
};

export default Result;
