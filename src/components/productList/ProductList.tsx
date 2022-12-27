import { useEffect, useState } from "react";
import { fetchProducts } from "../../apis/api";
import { productInfo } from "../../constants/interfaces";
import styles from "../../styles/productList.module.scss";
import Pagination from "../search/Pagination";
import Table from "./Table";

const ProductList = () => {
  const [products, setProducts] = useState<Array<productInfo>>([]);

  const getProductInfos = async () => {
    const productInfos = await fetchProducts(50);
    console.log(productInfos);
    setProducts([...productInfos.products]);
  };

  useEffect(() => {
    getProductInfos();
  }, []);

  return (
    <section className={styles.container}>
      <Table products={products} />
      <Pagination pages={Math.floor(products.length / 10)} />
    </section>
  );
};

export default ProductList;
