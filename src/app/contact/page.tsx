import styles from "./page.module.scss";
import TitleBlock from "@/app/components/TitleBlock/TitleBlock";
import ContentWrap from "@/app/components/ContentWrap/ContentWrap";

export default function Contact() {
  return (
    <>
      <main className={`${styles.pageContainer} ${styles.content}`}>
        <TitleBlock text="Contact Us" />
        <ContentWrap>
          <div className={`${styles.contactFormWrap}`}>
            <div className={`${styles.contactFormHeader}`}>
              Have a question? Please get in touch!
            </div>
            <form
              // onSubmit={(e) => e.preventDefault()}
              className={`${styles.contactForm}`}
            >
              <input type="hidden" name="enquiry_number" />
              <div className={`${styles.contactFormElement}`}>
                <label
                  className={`${styles.contactFormLabel}`}
                  htmlFor={"name"}
                >
                  Name
                </label>
                <input
                  className={`${styles.contactFormInput}`}
                  id="name"
                  name="from_name"
                  placeholder="Enter your name..."
                  required
                  type="text"
                />
              </div>
              <div className={`${styles.contactFormElement}`}>
                <label
                  className={`${styles.contactFormLabel}`}
                  htmlFor={"email"}
                >
                  Email
                </label>
                <input
                  className={`${styles.contactFormInput} ${styles.email}`}
                  id="email"
                  name="user_email"
                  placeholder="Enter your email..."
                  required
                  type="email"
                />
              </div>
              <div className={`${styles.contactFormElement}`}>
                <label
                  className={`${styles.contactFormLabel}`}
                  htmlFor={"phone_number"}
                >
                  Phone Number
                </label>
                <input
                  className={`${styles.contactFormInput}`}
                  id="phone_number"
                  name="user_phone_number"
                  type="tel"
                  placeholder="Enter contact number..."
                  required
                />
              </div>
              <div className={`${styles.contactFormElement}`}>
                <label
                  className={`${styles.contactFormLabel}`}
                  htmlFor={"select"}
                >
                  What is your query about?
                </label>
                <select
                  className={`${styles.contactFormInput}`}
                  name="subject"
                  id="select"
                >
                  <option value="" disabled selected>
                    Select your option:
                  </option>
                  <option value="Booking the band / Availability">
                    Booking the band / Availability
                  </option>
                  <option value="Available line-ups">Available line-ups</option>
                  <option value="Special song requests">
                    Special song requests
                  </option>
                  <option value="Something else">Something else</option>
                </select>
              </div>
              <div className={`${styles.contactFormElement}`}>
                <textarea
                  className={`${styles.contactFormInput}`}
                  id="textarea"
                  name="message"
                  placeholder="Your message here..."
                  required
                  // rows="4"
                  v-model="message.text"
                />
              </div>
              <div className={`${styles.contactFormElement}`}>
                <input
                  className={`${styles.contactFormSubmit}`}
                  type="submit"
                  value="Submit"
                />
              </div>
            </form>
          </div>
        </ContentWrap>
      </main>
    </>
  );
}
