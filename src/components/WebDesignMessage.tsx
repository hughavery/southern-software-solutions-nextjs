'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import styles from './WebDesignMessage.module.css';

const WebDesignMessage: React.FC = () => {
  const [activeVisual, setActiveVisual] = useState(0);
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

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveVisual((prev) => (prev + 1) % 4);
    }, 5000); // Change visual every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section className={styles.messageSection}>
      <div className={styles.messageContent} ref={ref}>
        <div className={styles.contentWrapper}>
          <div className={styles.textContent}>
            <div className={styles.sectionMessage}>
              <motion.h2
                initial={isMobile ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                animate={isMobile ? { opacity: 1, x: 0 } : (isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 })}
                transition={isMobile ? { duration: 0 } : { duration: 0.6, ease: "easeOut" }}
                style={{ willChange: 'transform, opacity' }}
                className={styles.highlightQuestion}
              >
                HEY YOU! ARE YOU LOOKING FOR A SEXY, WELL-DRESSED, SUPER-POWERED SALESPERSON THAT WORKS 24 HOURS A DAY, 7 DAYS A WEEK?
              </motion.h2>

              <motion.div
                initial={isMobile ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                animate={isMobile ? { opacity: 1, x: 0 } : (isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 })}
                transition={isMobile ? { duration: 0 } : { duration: 0.6, ease: "easeOut" }}
                style={{ willChange: 'transform, opacity' }}
              >
                <p className={styles.answerIntro}>
                  <strong>You&apos;re in luck — that&apos;s exactly what we provide.</strong>
                </p>
              </motion.div>

              <motion.div
                initial={isMobile ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                animate={isMobile ? { opacity: 1, x: 0 } : (isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 })}
                transition={isMobile ? { duration: 0 } : { duration: 0.6, ease: "easeOut" }}
                style={{ willChange: 'transform, opacity' }}
              >
                <p className={styles.featuresText}>Our websites are designed to:</p>
                <ul className={styles.featuresList}>
                  <li><span className={styles.featureHighlight}>Rank on Google</span></li>
                  <li><span className={styles.featureHighlight}>Captivate visitors</span> with stunning design</li>
                  <li><span className={styles.featureHighlight}>Make it effortless</span> for users to engage</li>
                </ul>
              </motion.div>

              <motion.div
                initial={isMobile ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                animate={isMobile ? { opacity: 1, x: 0 } : (isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 })}
                transition={isMobile ? { duration: 0 } : { duration: 0.6, ease: "easeOut" }}
                style={{ willChange: 'transform, opacity' }}
              >
                <p className={styles.closingStatement}>
                  Most importantly, they help our clients <strong>grow their ventures — fast.</strong>
                </p>
              </motion.div>
            </div>
          </div>
          <motion.div
            className={styles.visualContent}
            initial={isMobile ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            animate={isMobile ? { opacity: 1, x: 0 } : (isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 })}
            transition={isMobile ? { duration: 0 } : { duration: 0.6, ease: "easeOut", delay: 0.2 }}
            style={{ willChange: 'transform, opacity' }}
          >
            {/* Visual 1: Revenue Growth */}
            <svg
              className={`${styles.incomeVisual} ${activeVisual === 0 ? styles.active : ''}`}
              viewBox="0 0 400 300"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Laptop Base */}
              <rect x="50" y="180" width="300" height="200" rx="15" fill="#2d3748" stroke="#4a5568" strokeWidth="2"/>
              <rect x="60" y="190" width="280" height="160" rx="8" fill="#1a202c"/>

              {/* Laptop Screen */}
              <rect className={styles.laptopScreen} x="70" y="200" width="260" height="140" rx="5" fill="#667eea" opacity="0.9"/>

              {/* Website Elements on Screen */}
              <rect x="80" y="210" width="240" height="20" rx="3" fill="#ffffff" opacity="0.9"/>
              <rect x="80" y="240" width="180" height="8" rx="2" fill="#ffffff" opacity="0.7"/>
              <rect x="80" y="255" width="200" height="8" rx="2" fill="#ffffff" opacity="0.7"/>
              <rect x="80" y="270" width="160" height="8" rx="2" fill="#ffffff" opacity="0.7"/>

              {/* CTA Button on Screen */}
              <rect x="80" y="290" width="80" height="25" rx="12" fill="#48bb78"/>
              <text x="120" y="307" textAnchor="middle" fill="white" fontSize="10" fontWeight="bold">Buy Now</text>

              {/* Money Icons Floating */}
              <g className={styles.moneyIcon}>
                <circle cx="350" cy="80" r="25" fill="#48bb78" opacity="0.9"/>
                <text x="350" y="88" textAnchor="middle" fill="white" fontSize="20" fontWeight="bold">$</text>
              </g>

              <g className={`${styles.moneyIcon} ${styles.delay1}`}>
                <circle cx="320" cy="50" r="20" fill="#38a169" opacity="0.8"/>
                <text x="320" y="57" textAnchor="middle" fill="white" fontSize="16" fontWeight="bold">$</text>
              </g>

              <g className={`${styles.moneyIcon} ${styles.delay2}`}>
                <circle cx="380" cy="120" r="18" fill="#2f855a" opacity="0.7"/>
                <text x="380" y="127" textAnchor="middle" fill="white" fontSize="14" fontWeight="bold">$</text>
              </g>

              {/* Growth Chart */}
              <g transform="translate(280, 160)">
                <rect className={styles.chartBar} x="0" y="40" width="15" height="20" fill="#48bb78" opacity="0.8"/>
                <rect className={`${styles.chartBar} ${styles.delay02}`} x="20" y="30" width="15" height="30" fill="#48bb78" opacity="0.8"/>
                <rect className={`${styles.chartBar} ${styles.delay04}`} x="40" y="15" width="15" height="45" fill="#48bb78" opacity="0.8"/>
                <rect className={`${styles.chartBar} ${styles.delay06}`} x="60" y="5" width="15" height="55" fill="#48bb78" opacity="0.8"/>
              </g>

              {/* Arrow pointing up */}
              <path d="M 360 140 L 370 130 L 380 140" stroke="#48bb78" strokeWidth="3" fill="none" strokeLinecap="round"/>
              <line x1="370" y1="130" x2="370" y2="150" stroke="#48bb78" strokeWidth="3" strokeLinecap="round"/>

              {/* Revenue Text */}
              <text x="200" y="40" textAnchor="middle" fill="#48bb78" fontSize="16" fontWeight="bold">Revenue Growth</text>
              <text x="200" y="60" textAnchor="middle" fill="#2f855a" fontSize="12">From Your Landing Page</text>
            </svg>

            {/* Visual 2: 24/7 Clock */}
            <svg
              className={`${styles.incomeVisual} ${activeVisual === 1 ? styles.active : ''}`}
              viewBox="0 0 400 300"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="200" cy="150" r="100" fill="#667eea" opacity="0.1" stroke="#667eea" strokeWidth="4"/>
              <circle cx="200" cy="150" r="90" fill="none" stroke="#764ba2" strokeWidth="2" strokeDasharray="5,5" className={styles.rotateAnimation}/>
              <circle cx="200" cy="150" r="10" fill="#667eea"/>
              <line x1="200" y1="150" x2="200" y2="90" stroke="#667eea" strokeWidth="4" strokeLinecap="round" className={styles.hourHand}/>
              <line x1="200" y1="150" x2="240" y2="150" stroke="#764ba2" strokeWidth="3" strokeLinecap="round" className={styles.minuteHand}/>
              <text x="200" y="50" textAnchor="middle" fill="#667eea" fontSize="32" fontWeight="bold">24/7</text>
              <text x="200" y="75" textAnchor="middle" fill="#764ba2" fontSize="14" fontWeight="600">Always Working</text>
              <g className={styles.pulseIcon}>
                <circle cx="300" cy="150" r="20" fill="#48bb78" opacity="0.2"/>
                <text x="300" y="158" textAnchor="middle" fill="#48bb78" fontSize="20" fontWeight="bold">✓</text>
              </g>
              <g className={styles.pulseIcon} style={{animationDelay: '0.5s'}}>
                <circle cx="100" cy="150" r="20" fill="#48bb78" opacity="0.2"/>
                <text x="100" y="158" textAnchor="middle" fill="#48bb78" fontSize="20" fontWeight="bold">✓</text>
              </g>
              <g className={styles.pulseIcon} style={{animationDelay: '1s'}}>
                <circle cx="200" cy="250" r="20" fill="#48bb78" opacity="0.2"/>
                <text x="200" y="258" textAnchor="middle" fill="#48bb78" fontSize="20" fontWeight="bold">✓</text>
              </g>
              <text x="200" y="285" textAnchor="middle" fill="#4a5568" fontSize="12" fontWeight="600">Never Sleeps, Never Stops</text>
            </svg>

            {/* Visual 3: Conversion Funnel */}
            <svg
              className={`${styles.incomeVisual} ${activeVisual === 2 ? styles.active : ''}`}
              viewBox="0 0 400 300"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <linearGradient id="funnelGrad1" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" style={{stopColor:'#667eea', stopOpacity:0.8}} />
                  <stop offset="100%" style={{stopColor:'#764ba2', stopOpacity:0.8}} />
                </linearGradient>
                <linearGradient id="funnelGrad2" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" style={{stopColor:'#f093fb', stopOpacity:0.8}} />
                  <stop offset="100%" style={{stopColor:'#f5576c', stopOpacity:0.8}} />
                </linearGradient>
              </defs>
              <path d="M 80 50 L 320 50 L 280 120 L 120 120 Z" fill="url(#funnelGrad1)" opacity="0.9"/>
              <text x="200" y="75" textAnchor="middle" fill="white" fontSize="14" fontWeight="bold">Visitors</text>
              <text x="200" y="95" textAnchor="middle" fill="white" fontSize="20" fontWeight="bold">10,000</text>
              <path d="M 120 120 L 280 120 L 250 190 L 150 190 Z" fill="url(#funnelGrad1)" opacity="0.8"/>
              <text x="200" y="145" textAnchor="middle" fill="white" fontSize="14" fontWeight="bold">Engaged</text>
              <text x="200" y="165" textAnchor="middle" fill="white" fontSize="18" fontWeight="bold">5,000</text>
              <path d="M 150 190 L 250 190 L 230 250 L 170 250 Z" fill="url(#funnelGrad2)" opacity="0.9"/>
              <text x="200" y="212" textAnchor="middle" fill="white" fontSize="14" fontWeight="bold">Customers</text>
              <text x="200" y="232" textAnchor="middle" fill="white" fontSize="18" fontWeight="bold">1,500</text>
              <circle cx="340" cy="150" r="40" fill="#48bb78" opacity="0.2" className={styles.pulseIcon}/>
              <text x="340" y="145" textAnchor="middle" fill="#48bb78" fontSize="24" fontWeight="bold">15%</text>
              <text x="340" y="165" textAnchor="middle" fill="#2f855a" fontSize="10" fontWeight="600">Convert</text>
              <text x="200" y="25" textAnchor="middle" fill="#667eea" fontSize="16" fontWeight="bold">High-Converting Funnel</text>
              <text x="200" y="285" textAnchor="middle" fill="#4a5568" fontSize="12" fontWeight="600">Optimized for Maximum Results</text>
            </svg>

            {/* Visual 4: Google Ranking */}
            <svg
              className={`${styles.incomeVisual} ${activeVisual === 3 ? styles.active : ''}`}
              viewBox="0 0 400 300"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect x="50" y="40" width="300" height="50" rx="25" fill="#ffffff" stroke="#e2e8f0" strokeWidth="2"/>
              <circle cx="80" cy="65" r="15" fill="#667eea" opacity="0.2"/>
              <text x="80" y="71" textAnchor="middle" fill="#667eea" fontSize="18">🔍</text>
              <text x="110" y="72" fill="#a0aec0" fontSize="14">Your Business Keywords...</text>
              <text x="200" y="25" textAnchor="middle" fontSize="12" fontWeight="600">
                <tspan fill="#4285f4">G</tspan>
                <tspan fill="#ea4335">o</tspan>
                <tspan fill="#fbbc04">o</tspan>
                <tspan fill="#4285f4">g</tspan>
                <tspan fill="#34a853">l</tspan>
                <tspan fill="#ea4335">e</tspan>
              </text>
              <g className={styles.slideUp} style={{animationDelay: '0.2s'}}>
                <rect x="50" y="110" width="300" height="50" rx="8" fill="#48bb78" opacity="0.1" stroke="#48bb78" strokeWidth="2"/>
                <text x="70" y="130" fill="#48bb78" fontSize="12" fontWeight="bold">🏆 #1 Result</text>
                <text x="70" y="148" fill="#1a202c" fontSize="14" fontWeight="600">Your Website - Top Ranking</text>
              </g>
              <g className={styles.slideUp} style={{animationDelay: '0.4s'}}>
                <rect x="50" y="170" width="300" height="40" rx="8" fill="#e2e8f0" opacity="0.3"/>
                <text x="70" y="195" fill="#718096" fontSize="12">#2 Competitor Website</text>
              </g>
              <g className={styles.slideUp} style={{animationDelay: '0.6s'}}>
                <rect x="50" y="220" width="300" height="40" rx="8" fill="#e2e8f0" opacity="0.3"/>
                <text x="70" y="245" fill="#718096" fontSize="12">#3 Another Competitor</text>
              </g>
              <circle cx="320" cy="135" r="25" fill="#667eea" className={styles.pulseIcon}/>
              <text x="320" y="142" textAnchor="middle" fill="white" fontSize="16" fontWeight="bold">↑</text>
              <text x="200" y="285" textAnchor="middle" fill="#48bb78" fontSize="14" fontWeight="bold">Dominate Search Results</text>
            </svg>
          </motion.div>
        </div>
        <motion.div
          initial={isMobile ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          animate={isMobile ? { opacity: 1, y: 0 } : (isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 })}
          transition={isMobile ? { duration: 0 } : { duration: 0.6, ease: "easeOut" }}
          style={{ willChange: 'transform, opacity' }}
        >
          <a href="/website-design" className={styles.ctaButton}>
            View Process
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default WebDesignMessage;
