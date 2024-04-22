import styles from "../styles/Features.module.css";

export const Features = () => {
  return (
    <section className={styles.features}>
      <div className={styles.images}>
        <img
          src="/desktop/image-woman-in-videocall.jpg"
          alt="Feature illustration"
          className={styles.image}
        />
        <img
          src="/desktop/image-women-videochatting.jpg"
          alt="Feature illustration"
          className={styles.image}
        />
        <img
          src="/desktop/image-men-in-meeting.jpg"
          alt="Feature illustration"
          className={styles.image}
        />
        <img
          src="/desktop/image-man-texting.jpg"
          alt="Feature illustration"
          className={styles.image}
        />
      </div>
      <div className={styles.text}>
        <h2 className={styles.purpose}>Built for modern use</h2>
        <h2 className={styles.title}>Smarter meetings, all in one place</h2>
        <p className={styles.description}>
          Send messages, share files, show your screen, and record your meetings
          — all in one workspace. Control who can join with invite-only team
          access, data encryption, and data export.
        </p>
      </div>
      <div className={styles.section}>
        <div className={styles["section-line"]}></div>
        <div className={styles["section-id"]}>01</div>
      </div>
    </section>
  );
};
