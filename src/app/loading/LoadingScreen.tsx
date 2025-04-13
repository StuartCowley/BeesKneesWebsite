import styles from "./loadingScreen.module.scss";

interface LoadingScreenProps {
  text: string;
}
export default function LoadingScreen({ text }: LoadingScreenProps) {
  return (
    <div className={styles.loadingScreen}>
      <div className={styles.loadingScreen__contentWrap}>
        <span className={styles.spinner}></span>
        <div className={styles.spinner__textWrap}>
          <span>{text}</span>
          <div className={styles.ellipsis}>. . .</div>
        </div>
      </div>
    </div>
  );
}
