import { FormEvent, useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { texts, searchOptionMap } from "../../constants/texts";
import styles from "../../styles/search.module.scss";
import Select from "../Select";
import {
  productsState,
  setShowedProducts,
  setCurrentPage,
  setTargetedProducts,
} from "../../stores/products";
import { productInfo } from "../../constants/interfaces";

const Search = () => {
  const { products } = useSelector((state: productsState) => state);
  const dispatch = useDispatch();
  const searchRef = useRef<HTMLInputElement>(null);
  const [searchType, setSearchType] = useState<string>(
    sessionStorage.getItem(texts.sessions.searchType) || texts.searchOptions[0]
  );
  const changeSearchType = (value: string) => {
    setSearchType(value);
    sessionStorage.setItem(texts.sessions.searchType, value);
  };

  const searchProducts = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const query = (formData.get("search") as string).toLowerCase();
    const type = searchOptionMap[searchType];

    let searchedProducts: productInfo[];

    if (type === "all") {
      searchedProducts = products.filter((product) =>
        [product.title, product.brand, product.description].some((content) => {
          return content.toLowerCase().match(new RegExp(query));
        })
      );
    } else {
      searchedProducts = products.filter((product) =>
        (product[type] as string).toLowerCase().match(new RegExp(query))
      );
    }

    dispatch(setTargetedProducts(searchedProducts));
    dispatch(setShowedProducts());
    dispatch(setCurrentPage(1));
    setSessionStorage(searchedProducts, query);
  };

  const setSessionStorage = (
    searchedProducts: productInfo[],
    keywords: string
  ) => {
    sessionStorage.setItem(
      texts.sessions.targetedProducts,
      JSON.stringify(searchedProducts)
    );
    sessionStorage.setItem("keywords", texts.sessions.keywords);
  };

  const setKeywords = () => {
    const keywords = sessionStorage.getItem(texts.sessions.keywords);
    if (keywords && searchRef.current) {
      searchRef.current.value = keywords;
    }
  };

  useEffect(() => {
    setKeywords();
  }, []);

  return (
    <section className={styles.container}>
      <p className={styles.title}>{texts.searchGoods}</p>
      <div className={styles.br} />
      <div className={styles.searchContainer}>
        <p className={styles.title}>{texts.search}</p>
        <div className={styles.search}>
          <Select
            options={texts.searchOptions}
            width={100}
            listDirection={"down"}
            onChange={changeSearchType}
            label={searchType}
          />
          <form className={styles.search} onSubmit={searchProducts}>
            <input className={styles.searchBar} name="search" ref={searchRef} />
            <button className={styles.searchButton}>{texts.inquiry}</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Search;
