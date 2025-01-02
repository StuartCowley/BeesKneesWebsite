import styles from "./page.module.scss";
import songs from "../data/songs.json";
import TitleBlock from "@/app/components/TitleBlock/TitleBlock";

export default function SongList() {
  return (
    <>
      <main className={`${styles.pageContainer} ${styles.content}`}>
        <TitleBlock text="Current Repertoire"/>
        {songs.map((song)=> <div key={song.id}>{song.title}</div>)}
      </main>
    </>
  );
}
