import { texts } from "../../constants/texts";
import styles from "../../styles/search.module.scss";

const Search = () => {
  return (
    <section className={styles.container}>
      <p className={styles.title}>{texts.searchGoods}</p>
      <div className={styles.br} />
      <div className={styles.searchContainer}>
        <p className={styles.title}>{texts.search}</p>
        <div className={styles.search}>
          <select className={styles.select}>
            {texts.searchOptions.map((searchOption) => (
              <option key={searchOption} value={searchOption}>
                {searchOption}
              </option>
            ))}
          </select>
          <input className={styles.searchBar} />
          <button className={styles.searchButton}>{texts.inquiry}</button>
        </div>
      </div>
    </section>
  );
};

export default Search;
