import styles from "./page.module.css";
import Card from "@/components/Card/Card";

const Home = () => {
  return (
    <div className={styles.main}>
      <Card mediaId={"123"} />
    </div>
  );
}

export default Home;