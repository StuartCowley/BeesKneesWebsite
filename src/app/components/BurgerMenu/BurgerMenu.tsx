import styles from "./burgerMenu.module.scss";
import Link from "next/link";
import Bee from "@/app/components/images/Bee";
import SocialBlock from "@/app/components/SocialBlock/SocialBlock";
import { pacifico } from "@/app/fonts";

interface BurgerMenuProps {
  toggle: (val: boolean) => void;
}

export default function BurgerMenu({ toggle }: BurgerMenuProps) {
  return (
    <div className={`${styles["burgerMenu"]}`}>
      <Link onClick={() => toggle(false)} href="/">
        <div className={`${styles["burgerMenu__logo-wrap"]}`}>
          <Bee />
        </div>
        <div
          className={`${styles["burgerMenu__logo-title"]} ${pacifico.className}`}
        >
          The Bees Knees
        </div>
      </Link>
      <Link
        onClick={() => toggle(false)}
        className={styles["burgerMenu__item"]}
        href={"/testimonials"}
      >
        Testimonials
      </Link>
      <Link
        onClick={() => toggle(false)}
        className={styles["burgerMenu__item"]}
        href={"/song-list"}
      >
        Song List
      </Link>
      <Link
        onClick={() => toggle(false)}
        className={styles["burgerMenu__item"]}
        href={"/contact"}
      >
        Contact
      </Link>
      <SocialBlock toggle={toggle} />
    </div>
  );
}
