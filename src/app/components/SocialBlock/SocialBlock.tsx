import Facebook from "../images/Facebook";
import Email from "../images/Email";
import styles from "./socialBlock.module.scss";
import Link from "next/link";

interface SocialBlockProps {
  toggle: (val: boolean) => void;
}

export default function SocialBlock({ toggle }: SocialBlockProps) {
  return (
    <div className={styles.socialBlock}>
      <div className={styles.socialBlock__itemWrap}>
        <Link
          href="https://www.facebook.com/thebeeskneesuk"
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => toggle(false)}
        >
          <Facebook
            className={styles.socialBlock__item}
            height="24px"
            width="24px"
          />
        </Link>
      </div>
      <div className={styles.socialBlock__itemWrap}>
        <Link href="/contact" onClick={() => toggle(false)}>
          <Email
            className={styles.socialBlock__item}
            height="24px"
            width="24px"
          />
        </Link>
      </div>
    </div>
  );
}
