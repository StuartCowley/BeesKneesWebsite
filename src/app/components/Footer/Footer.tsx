"use client";

import Link from "next/link";
import Bee from "../images/Bee";
import SocialBlock from "../SocialBlock/SocialBlock";
import { useMenu } from "@/hooks/useMenu";
import { pacifico } from "@/app/fonts";
import styles from "./footer.module.scss";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const { setIsOpen } = useMenu();

  return (
    <footer className={styles.footer}>
      <div className={`${styles.pageContainer}`}>
        <div className={styles.footer__content}>
          <nav className={styles.footer__navWrap}>
            <Link
              className={styles.footer__navItem}
              href={"/testimonials"}
              onClick={() => setIsOpen(false)}
            >
              Testimonials
            </Link>
            <Link
              className={styles.footer__navItem}
              href={"/song-list"}
              onClick={() => setIsOpen(false)}
            >
              Song List
            </Link>
            <Link
              className={styles.footer__navItem}
              href={"/contact"}
              onClick={() => setIsOpen(false)}
            >
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
          <SocialBlock toggle={(val: boolean) => setIsOpen(val)} />
        </div>
        <div className={styles.footer__copyright}>
          <p>&copy; The Bees Knees {currentYear}</p>
        </div>
      </div>
    </footer>
  );
}
