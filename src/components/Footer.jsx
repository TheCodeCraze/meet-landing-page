import styles from "../styles/Footer.module.css";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <h2 className={styles.title}>Experience more together</h2>
      <p className={styles.description}>
        Stay connected with reliable HD meetings and unlimited one-on-one and
        group video sessions.
      </p>
      <button className={styles.cta}>
        Download <span>v1.3</span>
      </button>
      <div className={styles.section}>
        <div className={styles["section-line"]}></div>
        <div className={styles["section-id"]}>02</div>
      </div>
    </footer>
  );
};
