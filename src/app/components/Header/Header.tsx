import Link from 'next/link';
import Image from 'next/image';
import beeLogo from "../../public/bee-logo.svg"
import Facebook from "../images/Facebook"
import Email from "../images/Email"
import styles from './header.module.scss';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={`${styles.pageContainer} ${styles.wrap}`}>
        <Image className={styles.logo} src={beeLogo} alt='A logo showing the bands name over an image of a bee' />
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
