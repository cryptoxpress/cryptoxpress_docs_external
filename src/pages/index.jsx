import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import styles from './index.module.css';
import HeroSection from '../components/homepage/HeroSection';
import GuidesAndSamples from '../components/homepage/Guides';
import ResourcesSection from '../components/homepage/ResourcesSection';

// function HomepageHeader() {
//   const {siteConfig} = useDocusaurusContext();
//   return (
//     <header className="bg-blue-500">
//       <div className="container mx-auto text-center py-24">
//       <h1 className="text-4xl font-bold text-white">{siteConfig.title}</h1>
//       <p className="text-xl py-6 text-white">{siteConfig.tagline}</p>

//       <div className="py-10">
//         <Link
//           className="bg-white rounded-md text-gray-500 px-4 py-2"
//           to="/docs/intro"
//         >
//           Docusaurus Tutorial - 5min ⏱️
//         </Link>
//       </div>
//       <div className="bg-red-500 dark:bg-yellow-500">this is tailwind!</div>
//     </div>
//   </header>
//   );
// }

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
      wrapperClassName='flex flex-col'
      >
      {/* <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main> */}
      <HeroSection/>
      <GuidesAndSamples/>
      <ResourcesSection/>
    </Layout>
  );
}
