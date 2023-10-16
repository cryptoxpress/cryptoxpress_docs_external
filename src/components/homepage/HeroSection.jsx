import React from "react";
import Link from "@docusaurus/Link";
import {
  Cookies20Regular,
  Wallet16Regular,
  StackVertical20Regular,
  Airplane20Regular
} from "@fluentui/react-icons";
import ThemedImage from '@theme/ThemedImage';
import clsx from "clsx";

const FEATURES = [
  {
    title: "Trade",
    icon: Cookies20Regular,
    text: "Buy and sell over 300 different cryptocurrency pairs using only 3 clicks, without paying any commissions. ",
    lightImage : 'img/undraw_docusaurus_mountain.svg',
    darkImage : 'img/undraw_docusaurus_react.svg',
    link : '/latest/category/trading'
  },
  {
    title: "Wallets",
    icon: Wallet16Regular,
    text: "Wallet that simplifies interaction with CryptoXpress Application on the Binance smart Chain (BSC)",
    lightImage : 'img/undraw_docusaurus_mountain.svg',
    darkImage : 'img/undraw_docusaurus_react.svg',
    link : '/latest/user-guides/wallets'
  },
  {
    title: "Staking",
    icon: StackVertical20Regular,
    text: "CryptoXpress now offers $XPRESS Token staking pools with an initial APY up to 2000%, powered by AllianceBlock's staking solution, LMaaS.",
    lightImage : 'img/undraw_docusaurus_mountain.svg',
    darkImage : 'img/undraw_docusaurus_react.svg',
    link : ''
  },
  {
    title: "Travel",
    icon: Airplane20Regular,
    text: "Book flights, accommodation, tours, rental cars and much more directly from CryptoXpress. ",
    lightImage : 'img/undraw_docusaurus_mountain.svg',
    darkImage : 'img/undraw_docusaurus_react.svg',
    link : '/latest/travel/flights'
  },

];

function HeroProduct({ link, title, icon: Icon, text, beta, lightImage, darkImage }) {
  return (
    <Link
      to={link}
      style={{
        borderWidth: "1px",
      }}
      className={
        "group relative cursor-pointer overflow-clip rounded-3xl from-primary/30 via-transparent to-transparen text-black transition-all hover:bg-gradient-to-tr hover:text-primary hover:no-underline dark:text-white"
      }
    >
      <div className="m-6 !pb-0">
        <h3 className="mb-1.5 flex items-center gap-3 font-jakarta group-hover:text-primary">
          <Icon className="h-7 w-7" />
          <div>
            {title}
            {beta && <span className="font-normal text-text-400"> (Beta)</span>}
          </div>
        </h3>
        <p className="mb-0 text-sm text-zinc-400">{text}</p>
      </div>
      {/* <ThemedImage
          sources={{
            light: lightImage,
            dark: darkImage,
          }}
          alt={title}
          className="mt-1 w-full transition-transform group-hover:scale-110"
        /> */}
    </Link>
  );
}

export default function HeroSection() {
  return (
    <>
      <section className="noise-bg no-underline-links px-4 pt-16 lg:py-0">
        <div className="flex flex-col items-center justify-between py-14">
          <h2 className="mb-4 font-jakarta text-5xl font-bold text-primary-100">
            CryptoCurrency Made Easy !
          </h2>
          <p className="max-w-xl text-center text-text-400">
          We are the bridge between your crypto world and everyday life NFTs, cryptocurrencies, payments, transfers, and more. All in one best-in-class digital experience.
          </p>
        </div>
      </section>


        <section className="mx-auto grid w-full max-w-5xl grid-cols-1 grid-rows-2 gap-6 px-4 md:grid-cols-2">
          {FEATURES.map((product) => (
            <HeroProduct {...product} key={product.title} />
          ))}
        </section>

    </>
  );
}
