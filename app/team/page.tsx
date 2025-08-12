import Image from 'next/image';
import { FaInstagram, FaLinkedin, FaGlobe } from 'react-icons/fa';
import styles from './team.module.css';

type Socials = {
    instagram?: string;
    linkedin?: string;
    website?: string;
};

type Member = {
    name: string;
    role: string;
    image?: string;  // optional since we override with fixed image
    quote?: string;
    socials?: Socials;
};

const boardMembers: Member[] = [
    {
        name: 'Aaditya Jha',
        role: 'President',
        quote: 'Leading with vision and passion for service.',
        socials: {
            instagram: 'https://instagram.com/aaditya',
            linkedin: 'https://linkedin.com/in/aadityajha',
            website: 'https://aadityajha.com',
        },
    },
    {
        name: 'Alina',
        role: 'Vice President',
        quote: 'Committed to empowering youth through action.',
        socials: {
            instagram: 'https://instagram.com/salina',
        },
    },
    {
        name: 'Rohan Shrestha',
        role: 'Secretary',
        quote: 'Bringing structure and clarity to every initiative.',
    },
    {
        name: 'Prakriti Sharma',
        role: 'Treasurer',
        quote: 'Ensuring our resources fuel the greatest impact.',
    },
];

const generalMembers: Member[] = [
    {
        name: 'Sushant KC',
        role: 'Community Service Director',
        socials: {
            linkedin: 'https://linkedin.com/in/sushantkc',
        },
    },
    {
        name: 'Anusha Adhikari',
        role: 'International Service Director',
    },
    {
        name: 'Bibek Basnet',
        role: 'Professional Development Director',
    },
    {
        name: 'Nisha Gurung',
        role: 'Club Service Director',
    },
    {
        name: 'Dipesh Thapa',
        role: 'Public Relations Officer',
    },
    {
        name: 'Shristi Koirala',
        role: 'Membership Chair',
    },
];

export default function Team() {
    return (
        <main className={styles.main}>
            <section className={styles.hero}>
                <h1>Our Team</h1>
                <p>
                    Meet the passionate individuals driving CMC Rotaract&rsquo;s mission forward.
                </p>
            </section>

            {/* Board Members */}
            <section className={styles.section} aria-labelledby="board-members-title">
                <h2 id="board-members-title" className={styles.sectionTitle}>
                    Board Members
                </h2>
                <div className={styles.boardGrid}>
                    {boardMembers.map((member, idx) => (
                        <article className={styles.boardCard} key={idx}>
                            {/* Hardcoded same image for everyone */}
                            <Image
                                src="/pic.png"
                                alt={`Portrait of ${member.name}`}
                                className={styles.avatarLarge}
                                loading="lazy"
                                width={200}
                                height={200}
                            />
                            <h3>{member.name}</h3>
                            <p className={styles.role}>{member.role}</p>
                            {member.quote && (
                                <blockquote className={styles.quote}>&quot;{member.quote}&quot;</blockquote>
                            )}
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
                            {/* Hardcoded same image for everyone */}
                            <Image
                                src="/pic.png"
                                alt={`Portrait of ${member.name}`}
                                className={styles.avatar}
                                loading="lazy"
                                width={150}
                                height={150}
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