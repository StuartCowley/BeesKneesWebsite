import Link from 'next/link';
import Bee from '../images/Bee';
import SocialBlock from '../SocialBlock/SocialBlock';
import styles from './header.module.scss';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={`${styles.pageContainer} ${styles.header__wrap}`}>
        <div className={styles.header__iconWrap}>
          <Bee />
        </div>
        <nav className={styles.header__nav}>
          <Link href={'/testimonials'}>Testimonials</Link>
          <Link href={'/song-list'}>Song List</Link>
          <Link href={'/contact'}>Contact</Link>
        </nav>
        <SocialBlock />
      </div>
    </header>
  );
}
