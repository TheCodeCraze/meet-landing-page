import styles from "../styles/Hero.module.css";

export const Hero = () => {
  return (
    <section className={styles.hero}>
      <img src="/logo.svg" alt="Home" className={styles.logo} />
      <div className={styles.content}>
        <img
          src="/desktop/image-hero-left.png"
          alt="Meet landing page illustration"
          className={styles["image-left"]}
        />
        <div className={styles.text}>
          <h1 className={styles.title}>Group Chat for Everyone</h1>
          <p className={styles.description}>
            Meet makes it easy to connect with others face-to-face virtually and
            collaborate across any device.
          </p>
          <div className={styles.cta}>
            <button className={styles["cta-download"]}>
              Download <span>v1.3</span>
            </button>
            <button className={styles["cta-explore"]}>What is it?</button>
          </div>
        </div>
        <img
          src="/desktop/image-hero-right.png"
          alt="Meet landing page illustration"
          className={styles["image-right"]}
        />
      </div>
    </section>
  );
};
