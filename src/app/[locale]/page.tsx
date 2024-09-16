import Popular from "@/components/Popular/Popular";
import Genres from "@/components/Genres/Genres";
import styles from "./page.module.css";
import { Locale } from "@/utils/i18n-config";

// update every 24hrs(we can't calculate to simplify so we must put the exact number) => 86400 = 24*60*60
export const revalidate = 86400;

const Home = ({ params: { locale } }: { params: { locale: Locale } }) => {
  return (
    <div className={styles.main}>
      <Popular locale={locale!} />
      <Genres locale={locale!} />
    </div>
  );
}

export default Home;