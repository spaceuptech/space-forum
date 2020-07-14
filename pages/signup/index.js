import Head from 'next/head'
import style from '../style.module.css'
import Link from 'next/link'

export default function Signup() {
  return (
    <div className="container">
      <Head>
        <title>Signup</title>
        <link rel="stylesheet" href="https://unpkg.com/spectre.css/dist/spectre.min.css" />
        <link rel="stylesheet" href="https://unpkg.com/spectre.css/dist/spectre-exp.min.css" />
        <link rel="stylesheet" href="https://unpkg.com/spectre.css/dist/spectre-icons.min.css" />
      </Head>

      <main className={style.loginBg}>
        <div className={style.loginLayout}>
          <div className={style.loginRectangle}>
            <div className={style.loginContainer}>
              <center>
                <img src="/logo-black.svg" alt="logo" />
              </center>
              <div className={style.loginForm}>
                <div className="form-group">
                  <label className="form-label">Name</label>
                  <input className="form-input" type="text" placeholder="Your name" />
                </div>
                <div className="form-group">
                  <label className="form-label">Email</label>
                  <input className="form-input" type="text" placeholder="Your email address" />
                </div>
                <div className="form-group">
                  <label className="form-label">Password</label>
                  <input className="form-input" type="password" placeholder="Type your password" />
                </div>
                <div className="form-group">
                  <label className="form-label">Confirm Password</label>
                  <input className="form-input" type="password" placeholder="Confirm your password" />
                </div>
              <center>
                <button className={style.verifyBtn}>Signup</button>
              </center>
              </div>
            </div>
          </div>
          <div className={style.loginFooter}>
            Already have an account?
            <Link href="/login">
              <a> Login!</a>
            </Link>
          </div>
        </div>
      </main>
    </div >
  )
}
