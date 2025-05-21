import styles from '../styles/MenuD.module.css';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { useEffect, useState } from 'react';

const tabs = [
  { label: 'Mode', path: '/mode', className: styles.mode },
  { label: 'Beauty', path: '/beauty', className: styles.beauty },
  { label: 'Podcast', path: '/podcast', className: styles.podcast },
  { label: 'Jobportal', path: '/jobportal', className: styles.job },

];

export default function MenuD() {
    const router = useRouter();
    const currentPath = router.pathname;
  
    const [activeTabIndex, setActiveTabIndex] = useState(() => {
      const path = currentPath === '/anonncepris' ? '/jobportal' : currentPath;
      return tabs.findIndex(tab => tab.path === path);
    });
  
    useEffect(() => {
      const path = currentPath === '/anonncepris' ? '/jobportal' : currentPath;
      setActiveTabIndex(tabs.findIndex(tab => tab.path === path));
    }, [currentPath]);
  
    return (
      <nav className={styles.container}>
        {/* Logo always at left: 0 */}
        <Link href="/" className={`${styles.bar} ${styles.logoBar}`}>
          <span className={styles.label}>Fashion <br></br>Forum</span>
        </Link>
  
        {tabs.map((tab, index) => {
          const isHomepage = currentPath === '/';
          let style = {};
  
          if (isHomepage) {
            // På forsiden: parker alle i højre side
            const rightOffset = (tabs.length - index) * 60 - 60;
            style.right = `${rightOffset}px`;
            style.left = 'unset';
          } else if (index <= activeTabIndex) {
            // Aktive og tidligere faner til venstre
            const leftOffset = 60 + index * 60;
            style.left = `${leftOffset}px`;
            style.right = 'unset';
          } else {
            // Kommende faner: placer i højre side i rækkefølge (accordion feel)
            const vwOffset = 96 - (tabs.length - 1 - index) * 4; 
            style.left = `${vwOffset}vw`;
            style.right = 'unset';
          }
  
          return (
            <Link
              key={tab.path}
              href={tab.path}
              className={`${styles.bar} ${tab.className}`}
              style={style}
            >
              <span className={styles.label}>{tab.label}</span>
            </Link>
          );
        })}
      </nav>
    );
  }
  
