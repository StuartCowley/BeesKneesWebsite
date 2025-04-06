import Link from "next/link";
import Bee from "../images/Bee";
import SocialBlock from "../SocialBlock/SocialBlock";
import { pacifico } from "@/app/fonts";
import styles from "./footer.module.scss";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={`${styles.pageContainer}`}>
        <div className={styles.footer__content}>
          <nav className={styles.footer__navWrap}>
            <Link className={styles.footer__navItem} href={"/testimonials"}>
              Testimonials
            </Link>
            <Link className={styles.footer__navItem} href={"/song-list"}>
              Song List
            </Link>
            <Link className={styles.footer__navItem} href={"/contact"}>
              Contact
            </Link>
          </nav>
          <div className={styles.footer__titleBlock}>
            <div className={styles.footer__iconWrap}>
              <Bee />
            </div>
            <div
              className={`${styles.footer__logoTitle} ${pacifico.className}`}
            >
              The Bees Knees
            </div>
            <div className={styles.footer__logoSubtitle}>
              Professional party band
            </div>
          </div>
          {/*Temp: Move isMenuOpen into a context, refactor and rebase this commit */}
          {/*<SocialBlock />*/}
        </div>
        <div className={styles.footer__copyright}>
          <p>&copy; The Bees Knees {currentYear}</p>
        </div>
      </div>
    </footer>
  );
}
