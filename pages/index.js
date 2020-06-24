import Head from 'next/head'
import Link from 'next/link'
import style from './style.module.css'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Space Forum</title>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
        <link rel="stylesheet" href="https://unpkg.com/spectre.css/dist/spectre.min.css" />
        <link rel="stylesheet" href="https://unpkg.com/spectre.css/dist/spectre-exp.min.css" />
        <link rel="stylesheet" href="https://unpkg.com/spectre.css/dist/spectre-icons.min.css" />
        <link href='https://fonts.googleapis.com/css?family=Raleway:400,500,600,700' rel='stylesheet' type='text/css'></link>
      </Head>

      <main>
        <header class="navbar">
          <section class="navbar-section">
          <img src="/logo-black.svg" alt="logo" />
          </section>
        </header>
        <Link href="/login/login-page">
          <a>Back to home</a>
        </Link>

      </main>
    </div>
  )
}
