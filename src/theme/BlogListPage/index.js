import React from 'react';
import clsx from 'clsx';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import {
	PageMetadata,
	HtmlClassNameProvider,
	ThemeClassNames,
} from '@docusaurus/theme-common';
import BlogLayout from '@theme/BlogLayout';
import BlogListPaginator from '@theme/BlogListPaginator';
import SearchMetadata from '@theme/SearchMetadata';
import BlogPostItems from '@theme/BlogPostItems';
import Link from '@docusaurus/Link';
import {
  ArrowRightFilled,
  ArrowRight12Regular,
  StarThreeQuarter12Regular,
  Add24Regular,
  LockClosed12Regular,
} from '@fluentui/react-icons';


const guides = [
    {
      title: 'How to get started with CryptoXpress App',
      icon: StarThreeQuarter12Regular,
      text: 'Check out an example of how to download and use the App.',
      link: '/guides/capabilities/recording',
    },
    {
      title: 'Add Wallet to CryptoXpress',
      icon: Add24Regular,
      text: 'Migration simplified. Refer the guide.',
      link: '/guides/migration/twilio/concepts-twilio-vs-dyte',
    },
    {
      title: 'How to Secure Account',
      icon: LockClosed12Regular,
      text: 'Easily turn on 2-Factor Authentication.',
      link: '/guides/capabilities/breakoutroom/create-breakout-rooms',
    },
];

function BlogListPageMetadata(props) {
    const { metadata } = props;
    const {
        siteConfig : {title : siteTitle},
    } = useDocusaurusContext();
    const { blogDescription, blogTitle, permaLink } = metadata;
    const isBlogOnlyMode = permaLink === '/';
    const title = isBlogOnlyMode ? siteTitle : blogTitle;

    return(
        <>
            <PageMetadata title={title} description={blogDescription} />
            <SearchMetadata tag='blog_posts_list'/>
        </>
    )
}
// title, text, icon: Icon, link 
function Guide({title, description, permalink}) {
    console.log(permalink)
    return (
      <Link
        to={permalink}
        className="group flex cursor-pointer items-start gap-2 rounded-lg border-2 border-transparent p-3 text-inherit transition-colors hover:border-primary hover:text-primary"
      >
        <StarThreeQuarter12Regular className="h-6 w-6" />
  
        <div className="flex flex-col">
          <h4 className="mb-1 font-semibold">{title}</h4>
          <p className="mb-0 text-sm text-text-400">{description.substring(0,80)}</p>
        </div>
  
        <ArrowRight12Regular className="ml-auto h-5 w-5 self-center opacity-0 transition-opacity group-hover:opacity-100" />
      </Link>
    );
}

function BlogCards({title, description, permalink}){
    return(
    
        <div className="p-4 md:w-1/3">
            <div className="blog_cards h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
            <img className="lg:h-48 md:h-36 w-full object-cover object-center" src="https://dummyimage.com/720x400" alt="blog"/>
            <div className="p-6">
                <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">CATEGORY</h2>
                <h1 className="blog_card_title title-font text-lg font-semibold text-gray-900 mb-3">{title}</h1>
                <p className="leading-relaxed mb-3">{description.substring(0,130) + ' . . .'}</p>
                <div className="flex items-center flex-wrap ">
                <Link className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">Read More
                    <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M5 12h14"></path>
                    <path d="M12 5l7 7-7 7"></path>
                    </svg>
                </Link>
                <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                    <svg className="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                    <circle cx="12" cy="12" r="3"></circle>
                    </svg>1.2K
                </span>
                <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                    <svg className="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                    <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                    </svg>6
                </span>
                </div>
            </div>
            </div>
        </div>

    )
}

function BlogListPageContent(props) {
    
    const { metadata, items } = props;

    const latest_blogs = items.slice(0,4); 

    console.log(items);
    return (
        <BlogLayout>
            <h1 style={{"fontSize" : "3em", "textAlign" : "center"}}>"Exploring Crypto Wonders!"</h1>
            <h3 style={{"fontSize" : "1.2em", "textAlign" : "center" ,"color" : "gray"}}>"Unlocking the Crypto Chronicles: Dive into a World of Digital Stories"</h3>
            
            <section className="noise-bg no-underline-links px-4 pt-5 lg:py-0">
                <div className="flex flex-col items-center justify-between">
                    <p className="max-w-xl text-center text-text-400">
                    "Dive into the world of digital riches with our crypto-powered app! Uncover the latest blockchain buzz, unravel the mysteries of decentralized finance. Whether you're a crypto enthusiast or a curious reader, our platform is your passport to the future of knowledge !"
                    </p>
                </div>
            </section>

            <section className="no-underline-links my-20 mx-auto flex w-full max-w-5xl flex-col gap-10 p-4 py-0 md:flex-row md:gap-0">
                <div className="flex-1">
                <div className="mb-1 flex items-center justify-between">
                    <h3 className="m-0">Latest Blogs !</h3>
                </div>
                <h4 className='text-gray-400 font-medium'>Read What Everyone has to say</h4>
        
                <div className="flex flex-col gap-4">
                    {latest_blogs.map((item) => (
                     <Guide {...item.content.metadata} key={item.content.metadata.title} />
                    //console.log(item.content.metadata)
                    ))}
                </div>
                </div>
            </section>

            {/* <div className='es-blog-grid'>
                <BlogPostItems items={items} />
            </div>           */}

            <h3 style={{"fontSize" : "2em", "textAlign" : "center", textDecoration : 'underline'}}>All Blogs</h3>
            <section className="text-gray-600 body-font">
                <div className="px-5 py-24 mx-auto">
                    <div className="flex flex-wrap -m-4">
                    {items.map((item) => (
                            <BlogCards {...item.content.metadata} key={item.content.metadata.title} />
                            //console.log(item.content.metadata)
                    ))}
                    </div>
                </div>
            </section>

            <BlogListPaginator metadata={metadata} /> 

        </BlogLayout>
    )

}


export default function BlogListPage(props) {
    return(
        <HtmlClassNameProvider className={clsx(
            ThemeClassNames.wrapper.blogPages,
            ThemeClassNames.page.blogListPage
        )}>
        <BlogListPageMetadata {...props}/>
        <BlogListPageContent {...props}/>
        </HtmlClassNameProvider>
    )
}