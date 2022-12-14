import Head from 'next/head'
import styles from '../styles/Home.module.css'


export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
      <h1 className="text-4xl font-bold underline text-cyan-500">
        Hello world!
      </h1>
      </main>

      <footer>
      </footer>
    </div>
  )
}
