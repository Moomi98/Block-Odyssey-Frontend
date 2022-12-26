import Search from "./components/search/Search";
import styles from "./styles/app.module.scss";
import Result from "./components/Result";
import ProductList from "./components/productList/ProductList";
function App() {
  return (
    <div className={styles.app}>
      <Search />
      <Result resultNumber={19} />
      <ProductList />
    </div>
  );
}

export default App;
