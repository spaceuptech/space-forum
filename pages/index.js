import Head from 'next/head'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Space Forum</title>
        <link href='https://fonts.googleapis.com/css?family=Raleway:400,500,600,700' rel='stylesheet' type='text/css'></link>
        <link rel="stylesheet" href="https://unpkg.com/spectre.css/dist/spectre.min.css" />
        <link rel="stylesheet" href="https://unpkg.com/spectre.css/dist/spectre-exp.min.css" />
        <link rel="stylesheet" href="https://unpkg.com/spectre.css/dist/spectre-icons.min.css" />
      </Head>

      <main>
        <h1 className="title">
          Hello world
        </h1>

      </main>
    </div>
  )
}
