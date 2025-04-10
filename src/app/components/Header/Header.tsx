"use client";

import Link from "next/link";
import Bee from "../images/Bee";
import SocialBlock from "../SocialBlock/SocialBlock";
import styles from "./header.module.scss";
import { pacifico } from "@/app/fonts";
import BurgerMenu from "@/app/components/BurgerMenu/BurgerMenu";
import NavCross from "@/app/components/BurgerMenu/NavCross/NavCross";
import { useMenu } from "@/hooks/useMenu";

export default function Header() {
  const { isOpen, setIsOpen } = useMenu();

  return (
    <header className={styles.header}>
      <div
        className={`${styles.header__burgerMenuWrap} ${isOpen ? styles["header__burgerMenuWrap--open"] : ""}`}
      >
        <BurgerMenu toggle={(val: boolean) => setIsOpen(val)} />
      </div>
      <div className={`${styles.pageContainer} ${styles.header__wrap}`}>
        <div className={`${styles.header__burgerMenuCross}`}>
          <NavCross isOpen={isOpen} toggle={(val: boolean) => setIsOpen(val)} />
        </div>
        <Link className={styles.header__homeCta} href={"/"}>
          <div className={`${styles.header__logoWrap} ${pacifico.className}`}>
            <Bee />
            <div className={styles.header__logoText}>
              <div>The</div>
              <div>Bees</div>
              <div>Knees</div>
            </div>
          </div>
        </Link>
        <nav className={styles.header__nav}>
          <Link
            className={styles["header__nav--link"]}
            href={"/testimonials"}
            onClick={() => setIsOpen(false)}
          >
            Testimonials
          </Link>
          <Link
            className={styles["header__nav--link"]}
            href={"/song-list"}
            onClick={() => setIsOpen(false)}
          >
            Song List
          </Link>
          <Link
            className={styles["header__nav--link"]}
            href={"/contact"}
            onClick={() => setIsOpen(false)}
          >
            Contact
          </Link>
        </nav>
        <SocialBlock toggle={(val: boolean) => setIsOpen(val)} />
      </div>
    </header>
  );
}
