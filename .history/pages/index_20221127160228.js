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
        <div>
          <RichtText />
        </div>
      </main>
    </div>
  )
}
