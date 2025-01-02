import styles from "./page.module.scss";
import songs from "../data/songs.json";
import ContentWrap from "@/app/components/ContentWrap/ContentWrap";
import TitleBlock from "@/app/components/TitleBlock/TitleBlock";
import Cta from "@/app/components/Cta/Cta";

export default function SongList() {
  return (
    <>
      <main className={`${styles.pageContainer} ${styles.content}`}>
        <TitleBlock text="Current Repertoire"/>
        <ContentWrap>
          <>
            <div className={styles.heading}>
              Our current repertoire features songs from 1950s-2020s, a wide range of artists, and a broad list of well known standards and popular songs from many genres. All these songs have been a part of our canon and the list continues to grow:
            </div>
            <div className={`${styles.table}`}>
              {songs.map((song)=> <div className={`${styles.songWrapper}`} key={song.id}>{song.title} - <span>{song.artist}</span></div>)}
            </div>
          </>
        </ContentWrap>
        <ContentWrap>
          <div className={styles.questions}>
            <div className={styles.heading}>
              Have a question about our repertoire? Is there a certain song you would like us to perform for your event? Get in touch!
            </div>
            <Cta link={"/contact"} label="Contact Us" />
          </div>
        </ContentWrap>
      </main>
    </>
  );
}
