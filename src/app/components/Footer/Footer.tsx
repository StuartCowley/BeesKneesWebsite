import Link from 'next/link';
import Bee from "../images/Bee"
import SocialBlock from '../SocialBlock/SocialBlock';
import styles from "./footer.module.scss";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`${styles.pageContainer} ${styles.footer__content}`}>
        <nav className={styles.footer__navWrap}>
          <Link className={styles.footer__navItem} href={'/testimonials'}>Testimonials</Link>
          <Link className={styles.footer__navItem} href={'/song-list'}>Song List</Link>
          <Link className={styles.footer__navItem} href={'/contact'}>Contact</Link>
        </nav>
        <div className={styles.footer__titleBlock}>
          <div className={styles.footer__iconWrap}>
            <Bee />
          </div>
          <div className={styles.footer__logoTitle}>The Bees Knees</div>
          <div className={styles.footer__logoSubtitle}>Professional party band</div>
        </div>
        <SocialBlock />
      </div>
    </footer>
  );
}
