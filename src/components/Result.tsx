import { texts } from "../constants/texts";
import styles from "../styles/result.module.scss";

interface resultProps {
  resultNumber: number;
}

const Result = ({ resultNumber }: resultProps) => {
  return (
    <section className={styles.container}>
      <p className={styles.text}>{texts.searchedData}</p>
      <p className={styles.resultNumber}>{resultNumber}</p>
      <p className={styles.text}>{texts.count}</p>
    </section>
  );
};

export default Result;
