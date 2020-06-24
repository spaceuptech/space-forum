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
                <div class="form-group">
                  <label class="form-label">Name</label>
                  <input class="form-input" type="text" placeholder="Your name" />
                </div>
                <div class="form-group">
                  <label class="form-label">Email</label>
                  <input class="form-input" type="text" placeholder="Your email address" />
                </div>
                <div class="form-group">
                  <label class="form-label">Password</label>
                  <input class="form-input" type="password" placeholder="Type your password" />
                </div>
                <div class="form-group">
                  <label class="form-label">Confirm Password</label>
                  <input class="form-input" type="password" placeholder="Confirm your password" />
                </div>
              </div>
              <center>
                <button class="btn btn-primary btn-lg">Signup</button>
              </center>
            </div>
          </div>
          <div className={style.loginFooter}>
            Already have an account?
            <Link href="/login/login-page">
              <a> Login!</a>
            </Link>
          </div>
        </div>
      </main>
    </div >
  )
}
