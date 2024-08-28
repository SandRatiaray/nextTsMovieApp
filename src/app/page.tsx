import Popular from "@/components/Popular/Popular";
import styles from "./page.module.css";
import Genres from "@/components/Genres/Genres";

const Home = () => {
  return (
    <div className={styles.main}>
      <Popular />
      <Genres />
    </div>
  );
}

export default Home;