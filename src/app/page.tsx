import Image from "next/image";
import styles from "./page.module.scss";
import { pacifico } from './fonts';

export default function Home() {
  return (
    <>
      <main className={`${styles.pageContainer} ${styles.content}`}>
        <Image
          className={styles.logo}
          src="https://nextjs.org/icons/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
        <h1 className={pacifico.className}>
          Home page
        </h1>
      </main>
    </>
  );
}
