import Facebook from "../images/Facebook";
import Email from "../images/Email";
import styles from "./socialBlock.module.scss";

export default function SocialBlock() {
  return (
    <div className={styles.socialBlock}>
      <div className={styles.socialBlock__itemWrap}>
        <Facebook
          className={styles.socialBlock__item}
          height="24px"
          width="24px"
        />
      </div>
      <div className={styles.socialBlock__itemWrap}>
        <Email
          className={styles.socialBlock__item}
          height="24px"
          width="24px"
        />
      </div>
    </div>
  );
}
