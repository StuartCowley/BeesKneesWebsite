import styles from "./page.module.scss";
import Footer from "../components/Footer/Footer";

export default function SongList() {
  return (
    <>
      <main className={`${styles.pageContainer} ${styles.content}`}>
        Song list
      </main>
      <Footer />
    </>
  );
}
