// app/join/page.tsx
import styles from './join.module.css';

export default function JoinPage() {
    return (
        <main className={styles.main}>
            <section className={styles.hero}>
                <h1 className={styles.title}>Join CMC Rotaract</h1>
                <p className={styles.subtitle}>
                    We open applications once a year for motivated, service-driven individuals ready to make a difference.
                </p>
            </section>

            <section className={styles.info}>
                <h2 className={styles.heading}>Application Status</h2>
                <p className={styles.status}>🚫 Currently Closed</p>
                <p className={styles.detail}>
                    Our membership drive usually opens during the <strong>first quarter of the academic year</strong>. Stay tuned for announcements on our Instagram or college notice board.
                </p>
                <p className={styles.note}>
                    Meanwhile, feel free to explore our{' '}
                    <a href="/projects">projects</a> and see what we're all about.
                </p>
            </section>
        </main>
    );
}