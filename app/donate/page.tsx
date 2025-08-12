'use client';

import styles from './Donate.module.css';

export default function Donate() {
    return (
        <main className={styles.container}>
            <section className={styles.hero}>
                <h1 className={styles.title}>Support the CMC Rotaract Mission</h1>
                <p className={styles.subtitle}>
                    Every contribution brings us closer to creating lasting impact in our community.
                    Your generosity fuels our service projects, scholarships, and outreach programs.
                </p>
            </section>

            <section className={styles.qrSection}>
                <div className={styles.qrCard}>
                    <h2>Donate Instantly via QR</h2>
                    <img
                        src="/qr.jpg"
                        alt="QR Code for Donation"
                        className={styles.qrImage}
                    />
                    <p className={styles.bankDetails}>
                        <strong>Bank:</strong> XYZ Bank<br />
                        <strong>Account Name:</strong> CMC Rotaract Club<br />
                        <strong>Account Number:</strong> XXXX-XXXX-1234
                    </p>
                    <p className={styles.note}>
                        For detailed payment info, email us at{' '}
                        <a href="mailto:donate@cmcrotaract.org">donate@cmcrotaract.org</a>
                    </p>
                </div>
            </section>
        </main>
    );
}