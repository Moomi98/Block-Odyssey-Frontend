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

  const setProductInfos = async () => {
    const productInfos = await fetchProducts(100);
    dispatch(setProducts(productInfos.products));
    const targetedProducts = sessionStorage.getItem("targetedProducts");
    if (targetedProducts) {
      dispatch(setTargetedProducts(JSON.parse(targetedProducts)));
    } else {
      dispatch(setTargetedProducts(productInfos.products));
    }
    dispatch(setShowedProducts());
  };

  useEffect(() => {
    setProductInfos();
  }, []);

  return (
    <section className={styles.container}>
      <Table />
      <Pagination />
    </section>
  );
};

export default ProductList;
