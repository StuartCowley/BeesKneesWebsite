"use client";

import styles from "./page.module.scss";
import { useFormStatus } from "react-dom";
import TitleBlock from "@/app/components/TitleBlock/TitleBlock";
import ContentWrap from "@/app/components/ContentWrap/ContentWrap";
import { sendEmail } from "@/app/api/send/route";

export default function Contact() {
  const { pending } = useFormStatus();

  return (
    <>
      <main className={`${styles.pageContainer} ${styles.content}`}>
        <TitleBlock text="Contact Us" />
        <ContentWrap>
          <div className={`${styles.contactFormWrap}`}>
            <div className={`${styles.contactFormHeader}`}>
              Have a question? Please get in touch!
            </div>
            <form action={sendEmail} className={`${styles.contactForm}`}>
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
                  // FIX THIS
                  pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}"
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
                  pattern="[+0-9]{11,13}"
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
                  <option disabled>Select your option:</option>
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
                />
              </div>
              <div className={`${styles.contactFormElement}`}>
                <input
                  disabled={pending}
                  className={`${styles.contactFormSubmit}`}
                  type="submit"
                  value={pending ? "Sending..." : "Submit"}
                />
              </div>
            </form>
          </div>
        </ContentWrap>
      </main>
    </>
  );
}
