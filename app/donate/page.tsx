'use client';

import { useState } from 'react';
import styles from './Donate.module.css';
import Image from 'next/image';

export default function Donate() {
    const presetAmounts = [500, 1000, 2000, 5000];
    const [amount, setAmount] = useState<number | ''>('');
    const [selectedPreset, setSelectedPreset] = useState<number | null>(null);
    const [paymentMethod, setPaymentMethod] = useState('esewa');
    const [recurring, setRecurring] = useState(false);
    const [donorName, setDonorName] = useState('');
    const [donorEmail, setDonorEmail] = useState('');
    const [donorMessage, setDonorMessage] = useState('');

    const handlePresetClick = (value: number) => {
        setSelectedPreset(value);
        setAmount(value);
    };

    const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const val = Number(e.target.value);
        setAmount(val);
        setSelectedPreset(null);
    };

    const handleDonate = () => {
        if (!amount || amount <= 0) {
            alert('Please enter a valid amount.');
            return;
        }

        // eSewa payment URL (replace with your merchant code)
        const esewaUrl = `https://esewa.com.np/epay/main?amt=${amount}&pid=CMC-${Date.now()}&scd=YOUR_MERCHANT_CODE&su=https://your-site.com/success&fu=https://your-site.com/fail`;
        window.open(esewaUrl, '_blank');
    };

    return (
        <main className={styles.container}>
            <section className={styles.hero}>
                <h1 className={styles.title}>Support the CMC Rotaract Mission</h1>
                <p className={styles.subtitle}>
                    Every contribution helps us create a lasting impact in our community.
                    Your generosity fuels our projects, scholarships, and outreach programs.
                </p>
            </section>

            <section className={styles.donateSection}>
                <div className={styles.donateCard}>
                    <h2>Choose Your Donation Amount</h2>

                    <div className={styles.presetAmounts}>
                        {presetAmounts.map((val) => (
                            <button
                                key={val}
                                className={`${styles.presetBtn} ${selectedPreset === val ? styles.selected : ''}`}
                                onClick={() => handlePresetClick(val)}
                            >
                                Rs. {val}
                            </button>
                        ))}
                    </div>

                    <div className={styles.customAmount}>
                        <label htmlFor="customAmount">Or enter custom amount (Rs.)</label>
                        <input
                            type="number"
                            id="customAmount"
                            placeholder="Enter amount"
                            value={amount}
                            onChange={handleAmountChange}
                            min={1}
                        />
                    </div>

                    <div className={styles.recurring}>
                        <label>
                            <input
                                type="checkbox"
                                checked={recurring}
                                onChange={() => setRecurring(!recurring)}
                            />
                            Make this a monthly recurring donation
                        </label>
                    </div>

                    <div className={styles.donorInfo}>
                        <h3>Your Information (Optional)</h3>
                        <input
                            type="text"
                            placeholder="Your Name"
                            value={donorName}
                            onChange={(e) => setDonorName(e.target.value)}
                        />
                        <input
                            type="email"
                            placeholder="Your Email"
                            value={donorEmail}
                            onChange={(e) => setDonorEmail(e.target.value)}
                        />
                        <textarea
                            placeholder="Message / Dedication"
                            value={donorMessage}
                            onChange={(e) => setDonorMessage(e.target.value)}
                        />
                    </div>

                    <div className={styles.paymentMethod}>
                        <h3>Payment Method</h3>
                        <div className={styles.paymentOptions}>
                            <label className={styles.paymentOption}>
                                <input
                                    type="radio"
                                    name="payment"
                                    value="esewa"
                                    checked={paymentMethod === 'esewa'}
                                    onChange={(e) => setPaymentMethod(e.target.value)}
                                />
                                {/* <span>eSewa</span> */}
                                <Image src="/esewa-logo.png" alt="eSewa" width={60} height={30} />
                            </label>
                        </div>
                    </div>

                    <button className={styles.donateBtn} onClick={handleDonate}>
                        Donate Now
                    </button>

                    <p className={styles.note}>
                        For detailed payment info, email us at{' '}
                        <a href="mailto:donate@cmcrotaract.org">donate@cmcrotaract.org</a>
                    </p>
                </div>
            </section>
        </main>
    );
}