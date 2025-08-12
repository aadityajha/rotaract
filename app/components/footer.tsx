import Link from 'next/link';
import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import styles from './Footer.module.css';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.footerContainer}>
                {/* Branding */}
                <div className={styles.branding}>
                    <h2 className={styles.brandingTitle}>CMC Rotaract</h2>
                    <p className={styles.brandingText}>
                        Empowering youth. Serving communities. Building leaders of tomorrow.
                    </p>
                </div>

                {/* Explore */}
                <nav aria-label="Explore links" className={styles.section}>
                    <h3 className={styles.sectionTitle}>Explore</h3>
                    <ul className={styles.list}>
                        <li><Link href="/" className={styles.link}>Home</Link></li>
                        <li><Link href="/about" className={styles.link}>About Us</Link></li>
                        <li><Link href="/#" className={styles.link}>Events</Link></li>
                        <li><Link href="/#" className={styles.link}>Gallery</Link></li>
                    </ul>
                </nav>

                {/* Connect */}
                <nav aria-label="Connect links" className={styles.section}>
                    <h3 className={styles.sectionTitle}>Connect</h3>
                    <ul className={styles.iconList}>
                        <li>
                            <a
                                href="https://instagram.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className={styles.iconLink}
                                aria-label="Instagram"
                            >
                                <FaInstagram />
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://facebook.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className={styles.iconLink}
                                aria-label="Facebook"
                            >
                                <FaFacebookF />
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://linkedin.com/company/cmc-rotaract"
                                target="_blank"
                                rel="noopener noreferrer"
                                className={styles.iconLink}
                                aria-label="LinkedIn"
                            >
                                <FaLinkedinIn />
                            </a>
                        </li>
                        <li>
                            <a href="mailto:info@cmcrotaract.org" className={styles.iconLink} aria-label="Email">
                                <MdEmail />
                            </a>
                        </li>
                    </ul>
                </nav>

                {/* Join */}
                <nav aria-label="Join links" className={styles.section}>
                    <h3 className={styles.sectionTitle}>Join</h3>
                    <ul className={styles.list}>
                        <li><Link href="/join" className={styles.link}>Become a Member</Link></li>
                        <li><Link href="/#" className={styles.link}>FAQ</Link></li>
                    </ul>
                </nav>
            </div>

            <div className={styles.footerBottom}>
                <p>&copy; {new Date().getFullYear()} CMC Rotaract Club. All rights reserved.</p>
                <p>
                    Built by{' '}
                    <strong className={styles.footerBottomStrong}>Aaditya Jha</strong>
                </p>
            </div>
        </footer>
    );
}