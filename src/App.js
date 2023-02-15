import { Main } from "./components/pages/main";
import styles from "./styles/App.module.scss";

let pages = ["info", "plan", "add", "finish", "end"];

function App() {
  return (
    <div className={styles.App}>
      <Main pages={pages} />
    </div>
  );
}

export default App;
