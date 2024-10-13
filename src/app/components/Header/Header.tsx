import Link from 'next/link';
import Bee from '../images/Bee';
import Facebook from "../images/Facebook"
import Email from "../images/Email"
import styles from './header.module.scss';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={`${styles.pageContainer} ${styles.wrap}`}>
        <Bee className={styles.socialItem} height="48px" width="48px" />
        <nav className={styles.nav}>
          <Link href={'/testimonials'}>Testimonials</Link>
          <Link href={'/song-list'}>Song List</Link>
          <Link href={'/contact'}>Contact</Link>
        </nav>
        <div className={styles.socialItems}>
          <div className={styles.socialItem__wrap}>
            <Facebook className={styles.socialItem} height="24px" width="24px" />
          </div>
          <div className={styles.socialItem__wrap}>
            <Email className={styles.socialItem} height="24px" width="24px" />
          </div>
        </div>
      </div>
    </header>
  );
}
