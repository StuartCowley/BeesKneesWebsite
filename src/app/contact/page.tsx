import styles from "./page.module.scss";
import Footer from "../components/Footer/Footer";

export default function Contact() {
  return (
    <>
      <main className={`${styles.pageContainer} ${styles.content}`}>
        Contact
      </main>
      <Footer />
    </>
  );
}
