import Link from 'next/link';
import styles from './projects.module.css';

const projects = [
    {
        id: 'healthcare',
        title: 'Community Healthcare Outreach',
        description:
            'Providing free health checkups and awareness sessions in underserved areas.',
    },
    {
        id: 'education',
        title: 'Youth Education Empowerment',
        description:
            'Supporting local schools with resources, mentorship, and scholarships.',
    },
    {
        id: 'environment',
        title: 'Sustainable Environment Initiative',
        description:
            'Planting trees, promoting recycling, and raising environmental awareness.',
    },
    {
        id: 'skills',
        title: 'Leadership & Skills Workshops',
        description:
            'Organizing workshops to develop leadership and life skills among youth.',
    },
];

export default function Projects() {
    return (
        <main className={styles.main}>
            <header className={styles.header}>
                <h1>Our Projects</h1>
                <p>
                    At CMC Rotaract, we design and implement impactful projects that transform communities and empower youth.
                </p>
            </header>

            <section className={styles.projectsGrid}>
                {projects.map(({ id, title, description }) => (
                    <article key={id} className={styles.projectCard}>
                        <h2>{title}</h2>
                        <p>{description}</p>
                        <Link href={`/projects/${id}`} className={styles.learnMore}>
                            Learn More →
                        </Link>
                    </article>
                ))}
            </section>
        </main>
    );
}