"use client";

import Link from "next/link";
import Bee from "../images/Bee";
import SocialBlock from "../SocialBlock/SocialBlock";
import styles from "./header.module.scss";
import { pacifico } from "@/app/fonts";
import BurgerMenu from "@/app/components/BurgerMenu/BurgerMenu";
import { useState } from "react";
import NavCross from "@/app/components/BurgerMenu/NavCross/NavCross";

export default function Header() {
  const [burgerMenuOpen, setBurgerMenuOpen] = useState(false);

  return (
    <header className={styles.header}>
      <div
        className={`${styles.header__burgerMenuWrap} ${burgerMenuOpen ? styles["header__burgerMenuWrap--open"] : ""}`}
      >
        <BurgerMenu />
      </div>
      <div className={`${styles.pageContainer} ${styles.header__wrap}`}>
        <div className={`${styles["header__burgerMenuCross"]}`}>
          <NavCross
            isOpen={burgerMenuOpen}
            toggle={(val: boolean) => setBurgerMenuOpen(val)}
          />
        </div>
        <Link href={"/"}>
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
          <Link className={styles["header__nav--link"]} href={"/testimonials"}>
            Testimonials
          </Link>
          <Link className={styles["header__nav--link"]} href={"/song-list"}>
            Song List
          </Link>
          <Link className={styles["header__nav--link"]} href={"/contact"}>
            Contact
          </Link>
        </nav>
        <SocialBlock />
      </div>
    </header>
  );
}
