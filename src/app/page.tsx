import Popular from "@/components/Popular/Popular";
import Genres from "@/components/Genres/Genres";
import styles from "./page.module.css";

// update every 24hrs(we can't calculate to simplify so we must put the exact number) => 86400 = 24*60*60
export const revalidate = 86400;

const Home = () => {
  return (
    <div className={styles.main}>
      <Popular />
      <Genres />
    </div>
  );
}

export default Home;