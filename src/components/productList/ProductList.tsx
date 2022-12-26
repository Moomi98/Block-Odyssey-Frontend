import { useEffect, useState } from "react";
import { fetchProducts } from "../../apis/api";
import { productInfo } from "../../constants/interfaces";
import styles from "../../styles/productList.module.scss";
import Table from "./Table";

const ProductList = () => {
  const [products, setProducts] = useState<Array<productInfo>>([]);

  const getProductInfos = async () => {
    const productInfos = await fetchProducts(10);
    console.log(productInfos);
    setProducts([...productInfos.products]);
  };

  useEffect(() => {
    getProductInfos();
  }, []);

  return <Table products={products} />;
};

export default ProductList;
