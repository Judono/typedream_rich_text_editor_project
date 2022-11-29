import { ThemeProvider } from '@emotion/react'
import { AppBar, Toolbar, Typography } from '@mui/material'
import { createTheme } from '@mui/system'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import RichtText from './rich_text'

export default function Home() {
  const theme = createTheme()
  return (
    <div>
      <Head>
        <title>Typedream code</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div>
            <AppBar position='relative'>
              <Toolbar>
                <Typography variant="h6" color="inherit" noWrap>
                  Typedream Rich Text Editor by Robert
                </Typography>
              </Toolbar>
            </AppBar>
            <main>
              <RichtText />
            </main>
        </div>
      </main>
    </div>
  )
}
