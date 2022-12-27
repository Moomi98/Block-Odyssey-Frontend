import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchProducts } from "../../apis/api";
import styles from "../../styles/productList.module.scss";
import Pagination from "../search/Pagination";
import Table from "./Table";
import { setProducts } from "../..//stores/products";

const ProductList = () => {
  const dispatch = useDispatch();

  const getProductInfos = async () => {
    const productInfos = await fetchProducts(20);
    dispatch(setProducts(productInfos.products));
  };

  useEffect(() => {
    getProductInfos();
  }, []);

  return (
    <section className={styles.container}>
      <Table />
    </section>
  );
};

export default ProductList;
