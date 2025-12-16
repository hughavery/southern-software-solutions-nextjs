'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import styles from './WebDesignMessage.module.css';

const WebDesignMessage: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <section className={styles.messageSection}>
      <div className={styles.messageContent} ref={ref}>
        <div className={styles.contentWrapper}>
          <div className={styles.textContent}>
            <div className={styles.sectionMessage}>
              <motion.div
                initial={isMobile ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                animate={isMobile ? { opacity: 1, y: 0 } : (isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 })}
                transition={isMobile ? { duration: 0 } : { duration: 0.8, ease: "easeOut" }}
                style={{ willChange: 'transform, opacity' }}
                className={styles.sectionLabel}
              >
                <div className={styles.labelLine}></div>
                <span className={styles.labelText}>The Purpose</span>
              </motion.div>

              <motion.h2
                initial={isMobile ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                animate={isMobile ? { opacity: 1, y: 0 } : (isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 })}
                transition={isMobile ? { duration: 0 } : { duration: 0.8, ease: "easeOut", delay: 0.1 }}
                style={{ willChange: 'transform, opacity' }}
                className={styles.hookHeadline}
              >
                Helping Kiwi Businesses <span className={styles.hookAccent}>Shine Online</span>
              </motion.h2>

              <motion.div
                initial={isMobile ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                animate={isMobile ? { opacity: 1, y: 0 } : (isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 })}
                transition={isMobile ? { duration: 0 } : { duration: 0.8, ease: "easeOut", delay: 0.2 }}
                style={{ willChange: 'transform, opacity' }}
              >
                <p className={styles.hookMessage}>
                  If you&apos;re working hard but not being seen…
                </p>

                <p className={styles.hookMessage}>
                  We help put your name in front of the right people with websites and digital solutions that look <strong>sharp</strong>, feel <strong>intuitive</strong>, and showcase your brand — turning <strong>visibility into enquiries and real results.</strong>
                </p>
              </motion.div>
            </div>
          </div>
        </div>
        <motion.div
          initial={isMobile ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          animate={isMobile ? { opacity: 1, y: 0 } : (isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 })}
          transition={isMobile ? { duration: 0 } : { duration: 0.6, ease: "easeOut" }}
          style={{ willChange: 'transform, opacity' }}
          className={styles.scrollPrompt}
        >
          <p className={styles.scrollText}>
            All Services
          </p>
          <div className={styles.scrollArrow}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 5V19M12 19L19 12M12 19L5 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WebDesignMessage;
