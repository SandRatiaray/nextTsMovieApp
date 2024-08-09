import Popular from "@/components/Popular/Popular";
import styles from "./page.module.css";
import Card from "@/components/Card/Card";

const Home = () => {
  return (
    <div className={styles.main}>
      <Popular />
    </div>
  );
}

export default Home;