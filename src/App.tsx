import Search from "./components/search/Search";
import styles from "./styles/app.module.scss";
import Result from "./components/Result";
function App() {
  return (
    <div className={styles.app}>
      <Search />
      <Result resultNumber={19} />
    </div>
  );
}

export default App;
