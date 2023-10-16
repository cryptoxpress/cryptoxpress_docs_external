---
title : Understanding your Futures
sidebar_label : Interface
sidebar_position : 2
---

<!-- IMPORTS -->
import Banner1 from '/img/futures/futures_banner.png'
import Banner2 from '/img/futures/order_banner_1.png'
import Banner3 from '/img/futures/order_banner_2.png'
import Banner4 from '/img/futures/leverage_banner_1.png'
import Banner5 from '/img/futures/leverage_banner_2.png'
import Banner6 from '/img/futures/margin_banner_1.png'
import Banner7 from '/img/futures/margin_banner_2.png'
import Admonition from '@theme/Admonition';
import Link from "@docusaurus/Link"

<div className="overview-header">
  <div>
    <p>
      The CryptoXpress Application also offers a Futures trading feature, allowing users to engage with contracts between investors betting on a cryptocurrency future price. 
    </p>
    <p>
      CryptoXpress provides a variety of order types for users engaging in Futures Trading. These orders empower users to implement strategic trading approaches and optimize their trading activities. Let's delve into the common order types available in CryptoXpress Spot Trading.
    </p>
    <h4>Quick Links</h4>
    <ul>
      <li>
        <Link to="/latest/basics/getting_started/import_wallet">
          Import Wallet from other App
        </Link>
      </li>
      <li>
         <Link to="/latest/basics/getting_started/overview">Learn more about how CryptoXpress works.</Link>
      </li>
    </ul>
  </div>
</div>

## Mastering the Order Book: Unveiling the Secrets to Smart Trading!

The order book is a record of all active **buy** and **sell** **orders** for an asset, sorted by their respective prices.

<center>
<img src={Banner1} width="270" />
</center>


In the image above, you can see a snapshot of the **order book** for the BTC/USDT pair on CryptoXpress Futures Screen. Buy orders are color-coded in green and are displayed at specific price levels, while sell orders are shown in red.

Order books are a valuable tool for traders as they offer insights into the levels of **buyer** and **seller** interest at different prices. This information can be instrumental in identifying potential support and resistance levels in the market.

## Mastering Order Types: Your Blueprint for Precision in Crypto Trading!

When placing orders CyptoXpress provides several options to which types suits you best :

<center>
    <div className="items-center">
        <img src={Banner2} width="270" style={{"margin" : "5px 10px 5px 5px"}} />
        <img src={Banner3} width="270" style={{"margin" : "5px 5px 5px 10px"}} />
    </div>
</center>


### Limit Order

A limit order is a type of order where you set a specific price at which you want to buy or sell an asset. This order will only go through if the market price reaches or surpasses the price you've defined. Essentially, limit orders enable you to try to buy at a lower price or sell at a higher price than what the asset is currently trading for.


### Market Order

A market order is a straightforward way to buy or sell a cryptocurrency at the current best available price. It gets matched with existing limit orders on the order book. When you use a market order, you'll incur fees as the one making the trade happen, often referred to as a "market taker."

### Stop Limit Order

A **stop-limit** order is a strategic trading tool that merges a stop trigger with a limit order. With this order type, traders can define the minimum profit they're comfortable with or the maximum risk they're willing to take in a trade. When the price hits the trigger point, a limit order is automatically executed, even if the user isn't actively logged into the platform. Additionally, stop-limit orders can be strategically placed by considering various market indicators, like support and resistance levels, for optimal trading outcomes.

### Stop Market Order

Much like a **stop-limit** order, a **stop market** order employs a stop price as a triggering point. However, when this stop price is met, it activates a market order instead.

## Unlocking the Power of Leverage in Futures: Your Guide to Fine-Tuning Control!

In **CryptoXpress Futures**, you have the flexibility to fine-tune your **leverage** for each contract. To make these **adjustments**, simply tap on the middle dropdown, located just below your **selected contract**. This action will open a Bottomsheet, allowing you to easily customize your leverage settings. Once you've made your desired changes, just **confirm**, and you're all set!

<center>
    <div className="items-center">
        <img src={Banner4} width="270" style={{"margin" : "5px 10px 5px 5px"}} />
        <img src={Banner5} width="270" style={{"margin" : "5px 5px 5px 10px"}} />
    </div>
</center>

<Admonition type="danger" icon="💡" title="Embrace Risk, but Respect the Danger . . .">
  <p>
    It's important to note that as your position size increases, your available leverage decreases. Conversely, when your position size is smaller, you can use higher leverage. However, it's crucial to understand that employing greater leverage also comes with an elevated risk of liquidation.
  </p>
</Admonition>

## Uncover the Power of Margins: Your Path to Leverage and Profitability!

CryptoXpress offers you the flexibility to manage margin for your current contract and positions effortlessly. To access the margin menu, simply tap on the currently selected margin name under the contract. A bottom sheet will appear, providing you with two options: Cross and Isolated.

<center>
    <div className="items-center">
        <img src={Banner6} width="270" style={{"margin" : "5px 10px 5px 5px"}} />
        <img src={Banner7} width="270" style={{"margin" : "5px 5px 5px 10px"}} />
    </div>
</center>

1. **Cross Margin Mode** : In Cross Margin mode, the entire margin balance is shared across open positions to avoid liquidation. If Cross Margin is enabled, the trader risks losing their entire margin balance along with any open positions in the event of a liquidation. Any realized PnL from another position can aid a losing position that is close to being liquidated.

2. **Isolated Margin Mode** : Isolated Margin is a specific margin allocated to each individual position, enabling traders to manage risk by limiting the margin allocated to each trade. In this mode, you have the flexibility to adjust the margin balance for each position independently.
Notably, in Isolated Margin mode, if a position faces liquidation, only the Isolated Margin balance is at risk, rather than your entire margin balance. This provides a more granular and controlled approach to managing your trading risk.

To switch the margin mode, simply choose your desired mode from the bottom sheet options and then tap **"Confirm"** to apply the new margin mode to the current contract.