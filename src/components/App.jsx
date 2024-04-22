import styles from "../styles/App.module.css";
import { Hero } from "./Hero";
import { Features } from "./Features";
import { Footer } from "./Footer";

export const App = () => {
  return (
    <main className={styles.container}>
      <Hero />
      <Features />
      <Footer />
    </main>
  );
};
