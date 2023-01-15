import Head from 'next/head'
import styles from '../styles/Home.module.css'


export default function Home() {
  return (
    <>
      <Head>
        <title>Ecommerce Web App</title>
      </Head>
      <div className={styles.BgImg}>
        <div className={styles.main}>
          <h1 className={styles.Headingh1}>Welcome To My Ecommerce App</h1>
          <div className={styles.button}>
            <a href="/signup" className={styles.btn}>Sign up</a>
            <a href="login" className={styles.btn}>Log in</a>
          </div>
        </div>
      </div>
    </>
  );
};
