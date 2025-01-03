import styles from "./page.module.scss";
import TitleBlock from "@/app/components/TitleBlock/TitleBlock";
import ContentWrap from "@/app/components/ContentWrap/ContentWrap";
import testimonials from "@/app/data/testimonials.json";

export default function Testimonials() {
  return (
    <main className={`${styles.pageContainer} ${styles.content}`}>
      <TitleBlock text="Testimonials" />
      {testimonials.reverse().map((testimonial) => (
        <ContentWrap key={testimonial.id}>
          <div className={`${styles.wrap}`}>
            <div className={`${styles.copy}`}>{testimonial.copy}</div>
            <div className={`${styles.attribution}`}>
              - {testimonial.author}, {testimonial.date}
            </div>
          </div>
        </ContentWrap>
      ))}
    </main>
  );
}
