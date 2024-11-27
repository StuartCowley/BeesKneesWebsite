import styles from "./page.module.scss";

export default function SongList() {
  return (
    <>
      <main className={`${styles.pageContainer} ${styles.content}`}>
        Song list
      </main>
    </>
  );
}
