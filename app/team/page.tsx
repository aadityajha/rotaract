import { FaInstagram, FaLinkedin, FaGlobe } from 'react-icons/fa';
import styles from './team.module.css';

const boardMembers = [
    {
        name: 'Aaditya Jha',
        role: 'President',
        image: '/team/aaditya.jpg',
        quote: 'Leading with vision and passion for service.',
        socials: {
            instagram: 'https://instagram.com/aaditya',
            linkedin: 'https://linkedin.com/in/aadityajha',
            website: 'https://aadityajha.com',
        },
    },
    {
        name: 'alina',
        role: 'Vice President',
        image: '/team/salina.jpg',
        quote: 'Committed to empowering youth through action.',
        socials: {
            instagram: 'https://instagram.com/salina',
        },
    },
    {
        name: 'Rohan Shrestha',
        role: 'Secretary',
        image: '/team/rohan.jpg',
        quote: 'Bringing structure and clarity to every initiative.',
    },
    {
        name: 'Prakriti Sharma',
        role: 'Treasurer',
        image: '/team/prakriti.jpg',
        quote: 'Ensuring our resources fuel the greatest impact.',
    },
];

const generalMembers = [
    {
        name: 'Sushant KC',
        role: 'Community Service Director',
        image: '/team/sushant.jpg',
        socials: {
            linkedin: 'https://linkedin.com/in/sushantkc',
        },
    },
    {
        name: 'Anusha Adhikari',
        role: 'International Service Director',
        image: '/team/anusha.jpg',
    },
    {
        name: 'Bibek Basnet',
        role: 'Professional Development Director',
        image: '/team/bibek.jpg',
    },
    {
        name: 'Nisha Gurung',
        role: 'Club Service Director',
        image: '/team/nisha.jpg',
    },
    {
        name: 'Dipesh Thapa',
        role: 'Public Relations Officer',
        image: '/team/dipesh.jpg',
    },
    {
        name: 'Shristi Koirala',
        role: 'Membership Chair',
        image: '/team/shristi.jpg',
    },
];

export default function Team() {
    return (
        <main className={styles.main}>
            <section className={styles.hero}>
                <h1>Our Team</h1>
                <p>Meet the passionate individuals driving CMC Rotaract’s mission forward.</p>
            </section>

            {/* Board Members */}
            <section className={styles.section} aria-labelledby="board-members-title">
                <h2 id="board-members-title" className={styles.sectionTitle}>
                    Board Members
                </h2>
                <div className={styles.boardGrid}>
                    {boardMembers.map((member, idx) => (
                        <article className={styles.boardCard} key={idx}>
                            <img
                                src={member.image}
                                alt={`Portrait of ${member.name}`}
                                className={styles.avatarLarge}
                                loading="lazy"
                            />
                            <h3>{member.name}</h3>
                            <p className={styles.role}>{member.role}</p>
                            <blockquote className={styles.quote}>"{member.quote}"</blockquote>

                            {member.socials && (
                                <div className={styles.socials} aria-label={`${member.name} social profiles`}>
                                    {member.socials.instagram && (
                                        <a
                                            href={member.socials.instagram}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            aria-label="Instagram"
                                            className={styles.socialIcon}
                                        >
                                            <FaInstagram />
                                        </a>
                                    )}
                                    {member.socials.linkedin && (
                                        <a
                                            href={member.socials.linkedin}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            aria-label="LinkedIn"
                                            className={styles.socialIcon}
                                        >
                                            <FaLinkedin />
                                        </a>
                                    )}
                                    {member.socials.website && (
                                        <a
                                            href={member.socials.website}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            aria-label="Personal Website"
                                            className={styles.socialIcon}
                                        >
                                            <FaGlobe />
                                        </a>
                                    )}
                                </div>
                            )}
                        </article>
                    ))}
                </div>
            </section>

            {/* General Members */}
            <section className={styles.section} aria-labelledby="general-members-title">
                <h2 id="general-members-title" className={styles.sectionTitle}>
                    General Members
                </h2>
                <div className={styles.grid}>
                    {generalMembers.map((member, idx) => (
                        <article className={styles.card} key={idx}>
                            <img
                                src={member.image}
                                alt={`Portrait of ${member.name}`}
                                className={styles.avatar}
                                loading="lazy"
                            />
                            <h3>{member.name}</h3>
                            <p className={styles.role}>{member.role}</p>

                            {member.socials && (
                                <div className={styles.socials} aria-label={`${member.name} social profiles`}>
                                    {member.socials.instagram && (
                                        <a
                                            href={member.socials.instagram}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            aria-label="Instagram"
                                            className={styles.socialIcon}
                                        >
                                            <FaInstagram />
                                        </a>
                                    )}
                                    {member.socials.linkedin && (
                                        <a
                                            href={member.socials.linkedin}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            aria-label="LinkedIn"
                                            className={styles.socialIcon}
                                        >
                                            <FaLinkedin />
                                        </a>
                                    )}
                                    {member.socials.website && (
                                        <a
                                            href={member.socials.website}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            aria-label="Personal Website"
                                            className={styles.socialIcon}
                                        >
                                            <FaGlobe />
                                        </a>
                                    )}
                                </div>
                            )}
                        </article>
                    ))}
                </div>
            </section>
        </main>
    );
}