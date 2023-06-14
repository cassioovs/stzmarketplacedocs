import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <div className={styles.topBanner}>
      <div className={styles.topBannerTitle}>
        {'🎉\xa0'}
        <Link
          className={styles.topBannerTitleText}>
            {'Docs\xa01.0 está\ nascendo!'}
        </Link>
        {'\xa0🥳'}
      </div>
      <div style={{display: 'flex', alignItems: 'center', flexWrap: 'wrap'}}>
        <div>
          <div>
            Uma base de conhecimento para o seu dia a dia 😍🥰💖
            <p></p>
            Em processo de desenvolvimento 😉🔝
            <p></p>
            <br></br>
            <Link
            className="button button--secondary button--lg"
            to="/docs/intro">
            Iniciar agora
          </Link>
          </div>
        </div>
        <div
          style={{
            flexGrow: 1,
            flexShrink: 0,
            padding: '0.5rem',
            display: 'flex',
            justifyContent: 'center',
          }}>
        </div>
      </div>
    </div>
          
        
  );
}

export default function Home(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Início`}
      description="">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
