import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import RichtText from './rich_text'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Typedream code</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1>Robert J Typedream RTE</h1>

        <div style={{
          padding: 5, 
          // borderStyle:'solid', 
          // borderColor:'linear-gradient(330deg, #ff0062, #8000ff, #00c0fe)',
          borderImage: 'linear-gradient(#ff0062, #8000ff, #00c0fe) 30',
          borderWidth: "4px",
          borderStyle: 'solid'}}>
          <RichtText />
        </div>
      </main>
    </div>
  )
}
