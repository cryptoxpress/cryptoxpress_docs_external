import Link from '@docusaurus/Link';
import React, { useState } from 'react';
import clsx from 'clsx';
import {
  ArrowRightFilled,
  ChevronLeftRegular,
  ChevronRightRegular,
} from '@fluentui/react-icons';

interface Resource {
  url: string;
  title: string;
  description: string;
  image: string;
}

const ALL_RESOURCES: Resource[] = [
  {
    url: '/guides/v2-migration-guide',

    title: 'Migrate to v2 REST API',
    description:
      'Excited to announce the release of our v2 REST APIs, which are faster, more idiomatic, and easier to use.',
    image:
      '/img/docusaurus-social-card.jpg'

  },
  {
    url: '/blog/welcome',

    title: 'HLS in Depth',
    description:
      "HLS is widely adopted, simple, yet robust. Learn how it works from a client's perspective, its segments, features, and disadvantages.",
    image:
      '/img/docusaurus-social-card.jpg'

  },
  {
    url: '/blog/welcome',

    title: 'Integrating React UI Kit',
    description:
      'In this video learn how to use React UI Kit prebuilt components to add live video and audio to your React application.',
    image: '/img/docusaurus-social-card.jpg'

  },
  {
    url: '/blog/welcome',

    title: 'Video KYC App using React UI Kit',
    description:
      'In this episode of Dyte Byte we show how to build Video KYC App using React UI Kit.',
    image: '/img/docusaurus-social-card.jpg'
  },
  {
    url: '/blog/welcome',

    title: 'Calling Dyte REST APIs',
    description: 'Understand our HTTP REST APIs',
    image: '/img/docusaurus-social-card.jpg'
  },
];

function Resource({

  url,
  image,
  title,
  description,

}: Resource) {
  return (
    <Link
      className="fade-in group flex flex-col justify-between"
      key={title}
      href={url}
    >
      <div>
        <div className="mb-3 overflow-hidden rounded-lg">
          <img
            src={image}
            alt={title}
            loading="lazy"
            className="aspect-video h-full w-full object-cover transition-transform group-hover:scale-110"
          />
        </div>
        <h3 className="font-semibold text-black group-hover:text-primary dark:text-white dark:group-hover:text-primary-100 lg:text-xl">
          {title}
        </h3>
        <p className="leading-snug text-text-400">{description}</p>
      </div>
    </Link>
  );
}

export default function ResourcesSection() {
  const [page, setPage] = useState(1);

  const resources = ALL_RESOURCES

  const currentResources = resources.slice((page - 1) * 3, page * 3);

  const pages = Math.ceil(resources.length / 3);

  const nextPage = () => {
    if (page < pages) {
      setPage(page + 1);
    }
  };

  const prevPage = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  return (
    <section className="no-underline-links mb-14 m-4">
      <div className="mx-auto max-w-5xl">
        <div className="flex items-center justify-between">
          <div>
            {/* <span className="dyte-badge">RESOURCES</span> */}
            <h2 className="text-4xl">Want to know more?</h2>
            <h4 className='font-medium text-neutral-400 -mt-2 mb-6'>Check out these Blogs</h4>
          </div>
          <Link
            to="https://dyte.io/blog"
            className="font-jakarta text-sm font-semibold text-primary"
          >
            All Blogs <ArrowRightFilled className="ml-1" />
          </Link>
        </div>

        <div className="relative flex flex-col">
          <div className="no-underline-links grid grid-cols-3 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {currentResources.map((resource, idx) => {
              return <Resource {...resource} key={idx} />;
            })}
          </div>

          <div className="my-10 ml-auto flex items-center justify-center md:my-0">
            <button
              onClick={prevPage}
              className="top-1/2 -left-14 rounded-lg border-none bg-transparent p-1 hover:cursor-pointer md:absolute md:-translate-y-1/2"
            >
              <ChevronLeftRegular className="h-6 w-6" />
            </button>

            <button
              onClick={nextPage}
              className="top-1/2 -right-14 rounded-lg bg-transparent border-none p-1 hover:cursor-pointer md:absolute md:-translate-y-1/2"
            >
              <ChevronRightRegular className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}