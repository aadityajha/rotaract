'use client';

import { useState } from 'react';
import styles from './Donate.module.css';

export default function Donate() {
    const [proof, setProof] = useState<File | null>(null);
    const [message, setMessage] = useState('');
    const [submitted, setSubmitted] = useState(false);

    function handleFileChange(e: React.ChangeEvent<HTMLInputElement>) {
        if (e.target.files?.[0]) {
            setProof(e.target.files[0]);
            setMessage('');
        }
    }

    function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        if (!proof) {
            setMessage('Please upload your payment proof.');
            return;
        }

        // Simulated API upload
        setTimeout(() => {
            setSubmitted(true);
            setProof(null);
        }, 1500);
    }

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
                        src="/donate-qr.png"
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

            <section className={styles.uploadSection}>
                <div className={styles.formCard}>
                    <h2>Upload Payment Proof <span>(Optional)</span></h2>
                    {!submitted ? (
                        <form onSubmit={handleSubmit} className={styles.form}>
                            <input
                                type="file"
                                accept="image/*"
                                onChange={handleFileChange}
                                className={styles.fileInput}
                            />
                            <button type="submit" className={styles.submitBtn}>
                                Submit Proof
                            </button>
                            {message && <p className={styles.error}>{message}</p>}
                        </form>
                    ) : (
                        <p className={styles.thankYou}>
                            Thank you for your kindness! We will verify your donation shortly.
                        </p>
                    )}
                </div>
            </section>
        </main>
    );
}