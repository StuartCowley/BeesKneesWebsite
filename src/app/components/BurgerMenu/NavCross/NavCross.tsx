import styles from "./navCross.module.scss";

interface NavCrossProps {
  isOpen: boolean;
  toggle: (val: boolean) => void;
}

export default function NavCross({ isOpen, toggle }: NavCrossProps) {
  return (
    <div className={styles.navCross}>
      <input
        className={styles.navCross__input}
        type="checkbox"
        onClick={() => toggle(!isOpen)}
      />
      <span
        className={`${styles.navCross__span} ${isOpen && styles["navCross__span--open"]}`}
      />
      <span
        className={`${styles.navCross__span} ${isOpen && styles["navCross__span--open"]}`}
      />
      <span
        className={`${styles.navCross__span} ${isOpen && styles["navCross__span--open"]}`}
      />
    </div>
  );
}
