import { FormEvent, useState } from "react";
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
  const [searchType, setSearchType] = useState<string>("전체");
  const changeSearchType = (value: string) => {
    setSearchType(value);
  };

  const searchProducts = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const query = formData.get("search") as string;
    const type = searchOptionMap[searchType];
    console.log(type);

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
  };

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
          />
          <form className={styles.search} onSubmit={searchProducts}>
            <input className={styles.searchBar} name="search" />
            <button className={styles.searchButton}>{texts.inquiry}</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Search;
