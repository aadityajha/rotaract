import Link from 'next/link';
import styles from './home.module.css';

export default function Home() {
  return (
    <main className={styles.main}>
      <section className={styles.hero}>
        <h1 className={styles.title}>CMC Rotaract</h1>
        <p className={styles.subtitle}>
          Empowering youth to lead with purpose, ignite change, and cultivate vibrant communities — one inspired action at a time.
        </p>
        <div className={styles.buttons}>
          <Link href="/projects" className={`${styles.btn} ${styles.primary}`}>
            Explore Our Impactful Projects
          </Link>
          <Link href="/join" className={`${styles.btn} ${styles.secondary}`}>
            Join the Movement
          </Link>
        </div>
      </section>

      <section className={styles.why}>
        <h2>Why Choose CMC Rotaract?</h2>
        <p>
          Leadership here is more than a role — it’s a lifelong commitment to integrity, service, and meaningful collaboration.
          Join us in shaping global citizens empowered to create lasting positive change.
        </p>
      </section>
    </main>
  );
}