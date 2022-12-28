import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchProducts } from "../../apis/api";
import styles from "../../styles/productList.module.scss";
import Pagination from "../search/Pagination";
import Table from "./Table";
import {
  setProducts,
  setShowedProducts,
  setTargetedProducts,
} from "../..//stores/products";

const ProductList = () => {
  const dispatch = useDispatch();

  const getProductInfos = async () => {
    const productInfos = await fetchProducts(100);
    dispatch(setProducts(productInfos.products));
    dispatch(setTargetedProducts(productInfos.products));
    dispatch(setShowedProducts());
  };

  useEffect(() => {
    getProductInfos();
  }, []);

  return (
    <section className={styles.container}>
      <Table />
      <Pagination />
    </section>
  );
};

export default ProductList;
