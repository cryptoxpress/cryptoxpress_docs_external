import React from 'react';
import Link from '@docusaurus/Link';
import {
  ArrowRightFilled,
  ArrowRight12Regular,
  StarThreeQuarter12Regular,
  Add24Regular,
  LockClosed12Regular,
  Airplane24Regular,
} from '@fluentui/react-icons';
import clsx from 'clsx';

const guides = [
    {
      title: 'How to get started with CryptoXpress App',
      icon: StarThreeQuarter12Regular,
      text: 'Check out an example of how to download and use the App.',
      link: '/latest/basics/introduction',
    },
    {
      title: 'Add Wallet to CryptoXpress',
      icon: Add24Regular,
      text: 'Migration simplified. Refer the guide.',
      link: '/latest/user-guides/wallets',
    },
    {
      title: 'How to Secure Account',
      icon: LockClosed12Regular,
      text: 'Easily turn on 2-Factor Authentication.',
      link: '/latest/user-guides/2fa/',
    },
    {
      title: 'Plan your Journey',
      icon: Airplane24Regular,
      text: 'Easily book Hotels and Flights',
      link: '/latest/category/explore-the-world',
    },
];

function Guide({ title, text, icon: Icon, link }) {
    return (
      <Link
        to={link}
        className="group flex cursor-pointer items-start gap-2 rounded-lg border-2 border-transparent p-3 text-inherit transition-colors hover:border-primary hover:text-primary"
      >
        <Icon className="h-6 w-6" />
  
        <div className="flex flex-col">
          <h4 className="mb-1 font-semibold">{title}</h4>
          <p className="mb-0 text-sm text-text-400">{text}</p>
        </div>
  
        <ArrowRight12Regular className="ml-auto h-5 w-5 self-center opacity-0 transition-opacity group-hover:opacity-100" />
      </Link>
    );
}

export default function GuidesAndSamples() {
    return (
      <section className="no-underline-links my-20 mx-auto flex w-full max-w-5xl flex-col gap-10 p-4 py-0 md:flex-row md:gap-0">
        <div className="flex-1">
          <div className="mb-8 flex items-center justify-between">
            <h3 className="m-0">Popular how to guides</h3>
  
            <Link to="/latest/category/basics" className="font-jakarta text-sm font-semibold">
              View more guides <ArrowRightFilled className="ml-1" />
            </Link>
          </div>
  
          <div className="flex flex-col gap-4">
            {guides.map((guide) => (
              <Guide {...guide} key={guide.title} />
            ))}
          </div>
        </div>
      </section>
    );
  }
