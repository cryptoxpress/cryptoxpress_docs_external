import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/github_deploy/blog',
    component: ComponentCreator('/github_deploy/blog', '98b'),
    exact: true
  },
  {
    path: '/github_deploy/blog/archive',
    component: ComponentCreator('/github_deploy/blog/archive', 'bf3'),
    exact: true
  },
  {
    path: '/github_deploy/blog/first-blog-post',
    component: ComponentCreator('/github_deploy/blog/first-blog-post', 'c9f'),
    exact: true
  },
  {
    path: '/github_deploy/blog/long-blog-post',
    component: ComponentCreator('/github_deploy/blog/long-blog-post', '6ec'),
    exact: true
  },
  {
    path: '/github_deploy/blog/mdx-blog-post',
    component: ComponentCreator('/github_deploy/blog/mdx-blog-post', '625'),
    exact: true
  },
  {
    path: '/github_deploy/blog/tags',
    component: ComponentCreator('/github_deploy/blog/tags', '2d9'),
    exact: true
  },
  {
    path: '/github_deploy/blog/tags/docusaurus',
    component: ComponentCreator('/github_deploy/blog/tags/docusaurus', '71b'),
    exact: true
  },
  {
    path: '/github_deploy/blog/tags/facebook',
    component: ComponentCreator('/github_deploy/blog/tags/facebook', 'a31'),
    exact: true
  },
  {
    path: '/github_deploy/blog/tags/hello',
    component: ComponentCreator('/github_deploy/blog/tags/hello', '3c8'),
    exact: true
  },
  {
    path: '/github_deploy/blog/tags/hola',
    component: ComponentCreator('/github_deploy/blog/tags/hola', '30f'),
    exact: true
  },
  {
    path: '/github_deploy/blog/welcome',
    component: ComponentCreator('/github_deploy/blog/welcome', 'f2b'),
    exact: true
  },
  {
    path: '/github_deploy/markdown-page',
    component: ComponentCreator('/github_deploy/markdown-page', 'b13'),
    exact: true
  },
  {
    path: '/github_deploy/search',
    component: ComponentCreator('/github_deploy/search', '815'),
    exact: true
  },
  {
    path: '/github_deploy/latest',
    component: ComponentCreator('/github_deploy/latest', 'e12'),
    routes: [
      {
        path: '/github_deploy/latest/basics/getting_started/beneficiary',
        component: ComponentCreator('/github_deploy/latest/basics/getting_started/beneficiary', '20c'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/github_deploy/latest/basics/getting_started/import_wallet',
        component: ComponentCreator('/github_deploy/latest/basics/getting_started/import_wallet', 'b8f'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/github_deploy/latest/basics/getting_started/intro',
        component: ComponentCreator('/github_deploy/latest/basics/getting_started/intro', '22d'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/github_deploy/latest/basics/getting_started/overview',
        component: ComponentCreator('/github_deploy/latest/basics/getting_started/overview', '002'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/github_deploy/latest/basics/introduction',
        component: ComponentCreator('/github_deploy/latest/basics/introduction', 'd88'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/github_deploy/latest/category/account',
        component: ComponentCreator('/github_deploy/latest/category/account', 'cfc'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/github_deploy/latest/category/basics',
        component: ComponentCreator('/github_deploy/latest/category/basics', '039'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/github_deploy/latest/category/coins',
        component: ComponentCreator('/github_deploy/latest/category/coins', '368'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/github_deploy/latest/category/explore-the-world',
        component: ComponentCreator('/github_deploy/latest/category/explore-the-world', 'a02'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/github_deploy/latest/category/faqs',
        component: ComponentCreator('/github_deploy/latest/category/faqs', '546'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/github_deploy/latest/category/futures-trading',
        component: ComponentCreator('/github_deploy/latest/category/futures-trading', '4bf'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/github_deploy/latest/category/getting-started',
        component: ComponentCreator('/github_deploy/latest/category/getting-started', '752'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/github_deploy/latest/category/security-management',
        component: ComponentCreator('/github_deploy/latest/category/security-management', 'b97'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/github_deploy/latest/category/spot-trading',
        component: ComponentCreator('/github_deploy/latest/category/spot-trading', 'bbc'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/github_deploy/latest/category/trading',
        component: ComponentCreator('/github_deploy/latest/category/trading', '113'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/github_deploy/latest/category/user-guide',
        component: ComponentCreator('/github_deploy/latest/category/user-guide', '03e'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/github_deploy/latest/faqs/',
        component: ComponentCreator('/github_deploy/latest/faqs/', 'ace'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/github_deploy/latest/trading/coins/',
        component: ComponentCreator('/github_deploy/latest/trading/coins/', '7f6'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/github_deploy/latest/trading/coins/info',
        component: ComponentCreator('/github_deploy/latest/trading/coins/info', 'bf3'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/github_deploy/latest/trading/coins/news',
        component: ComponentCreator('/github_deploy/latest/trading/coins/news', 'a69'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/github_deploy/latest/trading/coins/watchlist',
        component: ComponentCreator('/github_deploy/latest/trading/coins/watchlist', '5f0'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/github_deploy/latest/trading/futures_trading/charges',
        component: ComponentCreator('/github_deploy/latest/trading/futures_trading/charges', '77d'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/github_deploy/latest/trading/futures_trading/future_trade',
        component: ComponentCreator('/github_deploy/latest/trading/futures_trading/future_trade', 'd02'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/github_deploy/latest/trading/futures_trading/orders',
        component: ComponentCreator('/github_deploy/latest/trading/futures_trading/orders', '3bd'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/github_deploy/latest/trading/spot_trading/charges',
        component: ComponentCreator('/github_deploy/latest/trading/spot_trading/charges', '45c'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/github_deploy/latest/trading/spot_trading/orders',
        component: ComponentCreator('/github_deploy/latest/trading/spot_trading/orders', '742'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/github_deploy/latest/trading/spot_trading/spot_trade',
        component: ComponentCreator('/github_deploy/latest/trading/spot_trading/spot_trade', '527'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/github_deploy/latest/trading/transaction_history',
        component: ComponentCreator('/github_deploy/latest/trading/transaction_history', '601'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/github_deploy/latest/trading/transfer',
        component: ComponentCreator('/github_deploy/latest/trading/transfer', '8ea'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/github_deploy/latest/travel/flights',
        component: ComponentCreator('/github_deploy/latest/travel/flights', 'c22'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/github_deploy/latest/travel/hotels',
        component: ComponentCreator('/github_deploy/latest/travel/hotels', 'a25'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/github_deploy/latest/user-guides/account/delete_account',
        component: ComponentCreator('/github_deploy/latest/user-guides/account/delete_account', 'ceb'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/github_deploy/latest/user-guides/account/kyc',
        component: ComponentCreator('/github_deploy/latest/user-guides/account/kyc', '40a'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/github_deploy/latest/user-guides/gift_card',
        component: ComponentCreator('/github_deploy/latest/user-guides/gift_card', '9e1'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/github_deploy/latest/user-guides/nft',
        component: ComponentCreator('/github_deploy/latest/user-guides/nft', 'fb3'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/github_deploy/latest/user-guides/security/2fa',
        component: ComponentCreator('/github_deploy/latest/user-guides/security/2fa', '6b0'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/github_deploy/latest/user-guides/security/app_pin',
        component: ComponentCreator('/github_deploy/latest/user-guides/security/app_pin', 'd8f'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/github_deploy/latest/user-guides/wallets',
        component: ComponentCreator('/github_deploy/latest/user-guides/wallets', '5d5'),
        exact: true,
        sidebar: "tutorialSidebar"
      }
    ]
  },
  {
    path: '/github_deploy/',
    component: ComponentCreator('/github_deploy/', '7f7'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
