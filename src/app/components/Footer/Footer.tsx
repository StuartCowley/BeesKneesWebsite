import Link from 'next/link';
import Bee from "../images/Bee"
import Facebook from "../images/Facebook"
import Email from "../images/Email"
import styles from "./footer.module.scss";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className='pageContainer'>
        <nav className={styles.nav}>
          <Link href={'/testimonials'}>Testimonials</Link>
          <Link href={'/song-list'}>Song List</Link>
          <Link href={'/contact'}>Contact</Link>
        </nav>
        <div className="titleBlock">
          <Bee className={styles.socialItem} height="48px" width="48px" />
          <div>The Bees Knees</div>
          <div>Professional party band</div>
        </div>
        <div className={styles.socialItems}>
          <div className={styles.socialItem__wrap}>
            <Facebook className={styles.socialItem} height="24px" width="24px" />
          </div>
          <div className={styles.socialItem__wrap}>
            <Email className={styles.socialItem} height="24px" width="24px" />
          </div>
        </div>
      </div>
    </footer>
  );
}
