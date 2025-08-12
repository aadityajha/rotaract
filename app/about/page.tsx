import styles from './About.module.css';

export default function About() {
    return (
        <main className={styles.main}>
            {/* Hero Section */}
            <section className={styles.hero}>
                <h1>About CMC Rotaract</h1>
                <p>
                    Empowering youth, inspiring leadership, and driving community impact through
                    action and collaboration.
                </p>
            </section>

            {/* Mission Section */}
            <section className={styles.section}>
                <h2 className={styles.sectionTitle}>Our Mission</h2>
                <p>
                    At CMC Rotaract, we believe in the power of service above self.
                    Our mission is to develop young leaders, foster cross-cultural understanding,
                    and create meaningful change in our communities through innovative projects
                    and collaborations.
                </p>
            </section>

            {/* History Section */}
            <section className={styles.sectionAlt}>
                <h2 className={styles.sectionTitle}>Our Story</h2>
                <p>
                    Founded as a chapter of the global Rotaract movement, CMC Rotaract brings
                    together passionate students and young professionals who share a commitment
                    to making a difference. Over the years, we have led impactful initiatives in
                    healthcare, education, environmental sustainability, and community development.
                </p>
            </section>

            {/* Call to Action */}
            <section className={styles.section}>
                <h2 className={styles.sectionTitle}>Be Part of Our Journey</h2>
                <p>
                    Whether you’re looking to serve the community, develop your leadership skills,
                    or connect with inspiring individuals, CMC Rotaract welcomes you.
                </p>
                <a href="/join" className={styles.ctaBtn}>Join Us</a>
            </section>
        </main>
    );
}