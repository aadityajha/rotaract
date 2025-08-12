'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import styles from './Navbar.module.css';

export default function Navbar() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);
  const closeSidebar = () => setSidebarOpen(false);

  return (
    <>
      <nav className={styles.navbar}>
        <div className={styles.branding}>
          <Link href="/" className={styles.logo}>
            <Image
              src="/icon.svg"
              alt="CMC Rotaract Logo"
              width={34}
              height={34}
              priority
            />
          </Link>
        </div>

        <div className={styles.desktopMenu}>
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/projects">Projects</Link>
          <Link href="/team">Team</Link>
          <Link href="/join">Join</Link>
          <Link href="/donate" className={styles.donateLink}>Donate</Link>
        </div>

        <button
          className={`${styles.hamburger} ${sidebarOpen ? styles.open : ''}`}
          onClick={toggleSidebar}
          aria-label="Toggle menu"
        >
          <span />
          <span />
          <span />
        </button>
      </nav>

      <div className={`${styles.sidebar} ${sidebarOpen ? styles.open : ''}`}>
        {/* <button
          className={styles.closeBtn}
          onClick={closeSidebar}
          aria-label="Close menu"
        >
          &times;
        </button> */}
        <Link href="/" onClick={closeSidebar}>Home</Link>
        <Link href="/about" onClick={closeSidebar}>About</Link>
        <Link href="/projects" onClick={closeSidebar}>Projects</Link>
        <Link href="/team" onClick={closeSidebar}>Team</Link>
        <Link href="/join" onClick={closeSidebar}>Join</Link>
        <Link href="/donate" onClick={closeSidebar} className={styles.donateLink}>Donate</Link>
      </div>
    </>
  );
}