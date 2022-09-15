import Head from "next/head"
import Image from "next/image"
import styles from "../styles/Home.module.css"
// import ManualHeader from "../components/ManualHeader.js"
import Header from "../components/Header"
import LotteryEntrance from "../components/LotteryEntrance"

import { useMoralis } from "react-moralis"

export default function Home() {
  const { isWeb3Enabled, chainId } = useMoralis()
  return (
    <div className={styles.container}>
      <Head>
        <title>Smart Contract Lottery</title>
        <meta name="description" content="Our Smart Contract Lottery" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* <ManualHeader /> */}
      <Header />
      <LotteryEntrance />
    </div>
  )
}
